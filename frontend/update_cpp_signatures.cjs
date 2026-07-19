const fs = require('fs');

const dsaPath = 'c:\\\\Users\\\\SHIVESH KUMAR BAJPAI\\\\.gemini\\\\antigravity-ide\\\\scratch\\\\frontend\\\\src\\\\placement-coach\\\\dsaQuestions.js';
let content = fs.readFileSync(dsaPath, 'utf8');

function snakeToCamel(str) {
  return str.replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function inferType(val) {
  if (typeof val === 'number') return 'int';
  if (typeof val === 'string') return 'string';
  if (typeof val === 'boolean') return 'bool';
  if (Array.isArray(val)) {
    if (val.length > 0 && typeof val[0] === 'string') return 'vector<char>';
    if (val.length > 0 && Array.isArray(val[0])) {
        if (typeof val[0][0] === 'string') return 'vector<vector<char>>';
        return 'vector<vector<int>>';
    }
    return 'vector<int>';
  }
  if (val && typeof val === 'object' && val.function_name) {
    if (val.function_name === 'TreeNode') return 'TreeNode*';
    if (val.function_name === 'ListNode') return 'ListNode*';
  }
  return 'auto'; // fallback
}

let count = 0;
let errors = 0;

content = content.replace(/"functionName":\s*"([^"]+)",[\s\S]*?"starterCode":\s*\{[\s\S]*?"cpp":\s*"([^"]+)"[\s\S]*?"testCases":\s*\[\s*\{\s*"args":\s*(\{[\s\S]*?\})\s*,\s*"expected":\s*([\s\S]*?)\s*\}/g, (match, fnNameRaw, cppRaw, argsRaw, expectedRaw) => {
    if (!cppRaw.includes('Implement the solution method')) {
        return match;
    }
    
    const fnName = snakeToCamel(fnNameRaw);
    try {
        const argsObj = eval('(' + argsRaw + ')');
        const expectedVal = eval('(' + expectedRaw + ')');
        
        const retType = inferType(expectedVal);
        const params = [];
        for (const [key, val] of Object.entries(argsObj)) {
            let type = inferType(val);
            if (type.startsWith('vector') || type === 'string') type += '&';
            params.push(`${type} ${key}`);
        }
        
        const sig = `class Solution {\\npublic:\\n    ${retType} ${fnName}(${params.join(', ')}) {\\n        \\n    }\\n};`;
        const escapedSig = sig.replace(/\\n/g, '\\\\n'); // not needed actually if replacing in string
        
        count++;
        return match.replace(cppRaw, sig);
    } catch (e) {
        errors++;
        return match;
    }
});

fs.writeFileSync(dsaPath, content);
console.log('Replaced ' + count + ' signatures, ' + errors + ' errors.');
