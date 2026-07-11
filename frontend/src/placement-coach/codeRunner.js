const FN_MAP = {
  two_sum: { python: 'two_sum', javascript: 'twoSum', java: 'twoSum', cpp: 'twoSum' },
  is_valid: { python: 'is_valid', javascript: 'isValid', java: 'isValid', cpp: 'isValid' },
  reverse_string: { python: 'reverse_string', javascript: 'reverseString', java: 'reverseString', cpp: 'reverseString' },
  binary_search: { python: 'binary_search', javascript: 'binarySearch', java: 'binarySearch', cpp: 'binarySearch' },
  max_subarray: { python: 'max_subarray', javascript: 'maxSubarray', java: 'maxSubarray', cpp: 'maxSubarray' },
  length_of_longest_substring: { python: 'length_of_longest_substring', javascript: 'lengthOfLongestSubstring', java: 'lengthOfLongestSubstring', cpp: 'lengthOfLongestSubstring' },
  climb_stairs: { python: 'climb_stairs', javascript: 'climbStairs', java: 'climbStairs', cpp: 'climbStairs' },
  merge_sorted: { python: 'merge_sorted', javascript: 'mergeSorted', java: 'mergeSorted', cpp: 'mergeSorted' },
};

const HELPER_NAMES = new Set([
  '_run_test', '_normalize', 'runTest', 'normalize', 'main', 'Main',
  'vecToStr', 'jsonEscape', 'Solution',
]);

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function snakeToCamel(str) {
  return str.replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function camelToSnake(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

export function normalizeUserCode(userCode, language) {
  if (!userCode) return '';
  let code = userCode.trim();

  const fenceMatch = code.match(/```(?:python|javascript|java|cpp|c\+\+|js|py)?\s*([\s\S]*?)```/i);
  if (fenceMatch) code = fenceMatch[1].trim();

  if (language === 'java') {
    code = code.replace(/^\s*package\s+[\w.]+;\s*/gm, '');
    code = code.replace(/\bpublic\s+class\s+(\w+)\b/g, 'class $1');
    if (!/class\s+Solution\b/.test(code)) {
      const trimmed = code.trim();
      if (trimmed && !trimmed.startsWith('class ')) {
        code = `class Solution {\n${trimmed}\n}`;
      }
    }
  }

  if (language === 'cpp' && !/class\s+Solution\b/.test(code)) {
    const trimmed = code.trim();
    if (trimmed && !trimmed.startsWith('class ')) {
      code = `class Solution {\npublic:\n${trimmed}\n};`;
    }
  }

  return code;
}

function getFnName(question, language) {
  const mapped = FN_MAP[question.functionName]?.[language];
  if (mapped) return mapped;
  if (!question.functionName) return '';
  if (language === 'python') return question.functionName;
  return snakeToCamel(question.functionName);
}

function getFunctionCandidates(question, language) {
  const names = [];
  const add = (n) => {
    if (n && !names.includes(n)) names.push(n);
  };

  add(getFnName(question, language));
  add(question.functionName);
  if (question.functionName) {
    add(snakeToCamel(question.functionName));
    add(camelToSnake(question.functionName));
  }

  return names;
}

function pythonLiteral(value) {
  if (value === true) return 'True';
  if (value === false) return 'False';
  if (value === null) return 'None';
  if (typeof value === 'string') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(pythonLiteral).join(', ')}]`;
  if (typeof value === 'object' && value !== null) {
    if (typeof value.function_name === 'string') {
      const argsList = value.args ? value.args.map(pythonLiteral).join(', ') : '';
      return `${value.function_name}(${argsList})`;
    }
    const entries = Object.entries(value).map(([k, v]) => `${JSON.stringify(k)}: ${pythonLiteral(v)}`);
    return `{${entries.join(', ')}}`;
  }
  return String(value);
}

function jsLiteral(value) {
  if (value === true) return 'true';
  if (value === false) return 'false';
  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(jsLiteral).join(', ')}]`;
  if (typeof value === 'object' && value !== null) {
    if (typeof value.function_name === 'string') {
      const argsList = value.args ? value.args.map(jsLiteral).join(', ') : '';
      return `new ${value.function_name}(${argsList})`;
    }
    const entries = Object.entries(value).map(([k, v]) => `${JSON.stringify(k)}: ${jsLiteral(v)}`);
    return `{${entries.join(', ')}}`;
  }
  return String(value);
}

function javaLiteral(value) {
  if (value === true) return 'true';
  if (value === false) return 'false';
  if (value === null) return 'null';
  if (typeof value === 'string') return `"${value.replace(/"/g, '\\"')}"`;
  if (Array.isArray(value)) {
    if (value.length && typeof value[0] === 'string') {
      return `new char[]{${value.map((c) => `'${c}'`).join(',')}}`;
    }
    return `new int[]{${value.map(javaLiteral).join(', ')}}`;
  }
  if (typeof value === 'object' && value !== null) {
    if (typeof value.function_name === 'string') {
      const argsList = value.args ? value.args.map(javaLiteral).join(', ') : '';
      return `new ${value.function_name}(${argsList})`;
    }
    return 'null';
  }
  return String(value);
}

function cppLiteral(value) {
  if (value === true) return 'true';
  if (value === false) return 'false';
  if (value === null) return 'nullptr';
  if (typeof value === 'string') return `"${value.replace(/"/g, '\\"')}"`;
  if (Array.isArray(value)) {
    if (value.length && typeof value[0] === 'string') {
      return `vector<char>{${value.map((c) => `'${c}'`).join(',')}}`;
    }
    return `vector<int>{${value.map(cppLiteral).join(', ')}}`;
  }
  if (typeof value === 'object' && value !== null) {
    if (typeof value.function_name === 'string') {
      const argsList = value.args ? value.args.map(cppLiteral).join(', ') : '';
      return `new ${value.function_name}(${argsList})`;
    }
    return 'nullptr';
  }
  return String(value);
}

function serializeArgs(args, language) {
  if (language === 'python') return Object.values(args).map((v) => pythonLiteral(v)).join(', ');
  if (language === 'javascript') return Object.values(args).map((v) => jsLiteral(v)).join(', ');
  if (language === 'java') return Object.values(args).map((v) => javaLiteral(v)).join(', ');
  if (language === 'cpp') return Object.values(args).map((v) => cppLiteral(v)).join(', ');
  return '';
}

function findPythonDefs(code) {
  return [...code.matchAll(/^\s*def\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/gm)]
    .map((m) => m[1])
    .filter((n) => !HELPER_NAMES.has(n) && !n.startsWith('_'));
}

function findJavaScriptFns(code) {
  const names = [];
  const patterns = [
    /function\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
    /(?:const|let|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(?:async\s*)?(?:function|\()/g,
  ];
  for (const re of patterns) {
    for (const m of code.matchAll(re)) {
      if (!HELPER_NAMES.has(m[1])) names.push(m[1]);
    }
  }
  return names;
}

function findJavaMethods(code) {
  const names = [];
  for (const m of code.matchAll(/(?:public|private|protected)\s+[\w\[\]<>,\s]+\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g)) {
    if (!HELPER_NAMES.has(m[1]) && m[1] !== 'main') names.push(m[1]);
  }
  return names;
}

function findCppMethods(code) {
  const names = [];
  for (const m of code.matchAll(/[\w<>*:\s]+\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\([^)]*\)\s*(?:const)?\s*(?:override)?\s*\{/g)) {
    if (!HELPER_NAMES.has(m[1])) names.push(m[1]);
  }
  return names;
}

function pickDefinedName(code, candidates, finder) {
  const defined = finder(code);
  for (const c of candidates) {
    if (defined.includes(c)) return c;
  }
  return defined[0] || candidates[0] || '';
}

function resolvePythonCall(userCode, question) {
  const candidates = getFunctionCandidates(question, 'python');
  const classMatch = userCode.match(/class\s+(\w+)\s*[:(]/);

  if (classMatch) {
    const className = classMatch[1];
    const method = pickDefinedName(userCode, candidates, findPythonDefs);
    return (argStr) => `${className}().${method}(${argStr})`;
  }

  const fn = pickDefinedName(userCode, candidates, findPythonDefs);
  return (argStr) => `${fn}(${argStr})`;
}

function resolveJavaScriptCall(userCode, question) {
  const candidates = getFunctionCandidates(question, 'javascript');
  const fn = pickDefinedName(userCode, candidates, findJavaScriptFns);
  return (argStr) => `${fn}(${argStr})`;
}

function resolveJavaCall(userCode, question) {
  const candidates = getFunctionCandidates(question, 'java');
  const method = pickDefinedName(userCode, candidates, findJavaMethods);
  return (argStr) => `solution.${method}(${argStr})`;
}

function resolveCppCall(userCode, question) {
  const candidates = getFunctionCandidates(question, 'cpp');
  const method = pickDefinedName(userCode, candidates, findCppMethods);
  return (argStr) => `solution.${method}(${argStr})`;
}

function buildPythonHarness(userCode, question) {
  const normalized = normalizeUserCode(userCode, 'python');
  const makeCall = resolvePythonCall(normalized, question);
  const cases = question.testCases
    .map((tc, i) => {
      const argStr = serializeArgs(tc.args, 'python');
      const expected = pythonLiteral(tc.expected);
      const inputStr = JSON.stringify(JSON.stringify(tc.args)); // Pass as Python string literal
      return `_run_test(${i + 1}, lambda: ${makeCall(argStr)}, ${expected}, ${inputStr})`;
    })
    .join('\n');

  let definitions = '';
  if (!userCode.includes('class TreeNode')) {
    definitions += `class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n`;
  }
  if (!userCode.includes('class ListNode')) {
    definitions += `class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n`;
  }

  return `import json
import math
import collections
import heapq
import bisect
from typing import *

${definitions}
${normalized}

def _normalize(val):
    if "${question.id}" == "two-sum" and isinstance(val, list):
        if val and isinstance(val[0], (int, float)):
            return sorted(val)
        return val
    return val

def _run_test(num, fn, expected, input_args):
    try:
        result = fn()
        norm_result = _normalize(result)
        norm_expected = _normalize(expected)
        status = "PASS" if norm_result == norm_expected else "FAIL"
        
        status_json = json.dumps(status)
        expected_json = json.dumps(norm_expected)
        actual_json = json.dumps(norm_result)
        print(f'{{"testNum": {num}, "status": {status_json}, "input": {input_args}, "expected": {expected_json}, "actual": {actual_json}}}')
    except Exception as e:
        expected_json = json.dumps(expected)
        actual_json = json.dumps(f"{type(e).__name__}: {e}")
        print(f'{{"testNum": {num}, "status": "ERROR", "input": {input_args}, "expected": {expected_json}, "actual": {actual_json}}}')

${cases}
`;
}

function buildJavaScriptHarness(userCode, question) {
  const normalized = normalizeUserCode(userCode, 'javascript');
  const makeCall = resolveJavaScriptCall(normalized, question);
  const cases = question.testCases
    .map((tc, i) => {
      const argStr = serializeArgs(tc.args, 'javascript');
      const expected = JSON.stringify(tc.expected);
      const inputStr = JSON.stringify(tc.args);
      return `runTest(${i + 1}, () => ${makeCall(argStr)}, ${expected}, ${inputStr});`;
    })
    .join('\n');

  let definitions = '';
  if (!userCode.includes('TreeNode')) {
    definitions += `class TreeNode { constructor(val, left, right) { this.val = (val===undefined ? 0 : val); this.left = (left===undefined ? null : left); this.right = (right===undefined ? null : right); } }\n`;
  }
  if (!userCode.includes('ListNode')) {
    definitions += `class ListNode { constructor(val, next) { this.val = (val===undefined ? 0 : val); this.next = (next===undefined ? null : next); } }\n`;
  }

  return `${definitions}
${normalized}

function normalize(val) {
  if ("${question.id}" === "two-sum" && Array.isArray(val) && val.length && typeof val[0] === 'number') {
    return [...val].sort((a, b) => a - b);
  }
  return val;
}

function runTest(num, fn, expected, inputArgs) {
  try {
    const result = fn();
    const normResult = normalize(result);
    const normExpected = normalize(expected);
    const pass = JSON.stringify(normResult) === JSON.stringify(normExpected);
    console.log(JSON.stringify({ testNum: num, status: pass ? 'PASS' : 'FAIL', input: inputArgs, expected: normExpected, actual: normResult }));
  } catch (e) {
    console.log(JSON.stringify({ testNum: num, status: 'ERROR', input: inputArgs, expected: expected, actual: e.message }));
  }
}

${cases}`;
}

function buildJavaHarness(userCode, question) {
  const normalized = normalizeUserCode(userCode, 'java');
  const method = pickDefinedName(normalized, getFunctionCandidates(question, 'java'), findJavaMethods);

  const caseLines = question.testCases
    .map((tc, i) => {
      const argStr = serializeArgs(tc.args, 'java');
      const expected = JSON.stringify(tc.expected);
      const inputStr = JSON.stringify(tc.args).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return `        runTest(${i + 1}, solution.${method}(${argStr}), "${expected}", "${inputStr}");`;
    })
    .join('\n');

  let definitions = '';
  if (!userCode.includes('class TreeNode')) {
    definitions += `class TreeNode { int val; TreeNode left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; } TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left = left; this.right = right; } }\n`;
  }
  if (!userCode.includes('class ListNode')) {
    definitions += `class ListNode { int val; ListNode next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val, ListNode next) { this.val = val; this.next = next; } }\n`;
  }

  return `import java.util.*;
import java.io.*;
import java.math.*;

${definitions}
${normalized}

class Main {
    static String normalize(Object val) {
        if ("${question.id}".equals("two-sum") && val instanceof int[]) {
            int[] arr = (int[]) val;
            int[] sorted = arr.clone();
            Arrays.sort(sorted);
            return Arrays.toString(sorted);
        }
        if (val instanceof int[]) {
            return Arrays.toString((int[]) val);
        }
        if (val instanceof Boolean) {
            return val.toString();
        }
        return String.valueOf(val);
    }

    static void runTest(int num, Object result, String expectedJson, String inputJson) {
        try {
            String normResult = normalize(result);
            boolean pass = normResult.replace(" ", "").equalsIgnoreCase(expectedJson.replace(" ", ""));
            String status = pass ? "PASS" : "FAIL";
            System.out.println("{\\"testNum\\":" + num + ",\\"status\\":\\"" + status + "\\",\\"input\\":" + inputJson + ",\\"expected\\":\\"" + expectedJson + "\\",\\"actual\\":\\"" + normResult + "\\"}");
        } catch (Exception e) {
            System.out.println("{\\"testNum\\":" + num + ",\\"status\\":\\"ERROR\\",\\"input\\":" + inputJson + ",\\"expected\\":\\"" + expectedJson + "\\",\\"actual\\":\\"" + e.getMessage().replace("\\"", "'") + "\\"}");
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
${caseLines}
    }
}`;
}

function buildCppHarness(userCode, question) {
  const normalized = normalizeUserCode(userCode, 'cpp');
  const method = pickDefinedName(normalized, getFunctionCandidates(question, 'cpp'), findCppMethods);

  const cases = question.testCases
    .map((tc, i) => {
      const argStr = serializeArgs(tc.args, 'cpp');
      const inputStr = JSON.stringify(JSON.stringify(tc.args));
      return `    runTest(${i + 1}, solution.${method}(${argStr}), ${JSON.stringify(JSON.stringify(tc.expected))}, ${inputStr});`;
    })
    .join('\n');

  let definitions = '';
  if (!userCode.includes('struct TreeNode') && !userCode.includes('class TreeNode')) {
    definitions += `struct TreeNode { int val; TreeNode *left; TreeNode *right; TreeNode() : val(0), left(nullptr), right(nullptr) {} TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {} };\n`;
  }
  if (!userCode.includes('struct ListNode') && !userCode.includes('class ListNode')) {
    definitions += `struct ListNode { int val; ListNode *next; ListNode() : val(0), next(nullptr) {} ListNode(int x) : val(x), next(nullptr) {} ListNode(int x, ListNode *next) : val(x), next(next) {} };\n`;
  }

  return `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <unordered_map>
#include <unordered_set>
#include <queue>
#include <stack>
#include <list>
#include <map>
#include <set>
#include <cmath>
#include <climits>
using namespace std;

${definitions}
${normalized}

string vecToStr(const vector<int>& v) {
    string s = "[";
    for (size_t i = 0; i < v.size(); i++) {
        if (i) s += ",";
        s += to_string(v[i]);
    }
    return s + "]";
}

string jsonEscape(const string& s) {
    string out;
    for (char c : s) {
        if (c == '"') out += "\\\\\\"";
        else if (c == '\\\\') out += "\\\\\\\\";
        else out += c;
    }
    return out;
}

void runTest(int num, const vector<int>& result, const string& expected, const string& inputStr) {
    string actual;
    if ("${question.id}" == "two-sum") {
        auto sorted = result; sort(sorted.begin(), sorted.end());
        actual = vecToStr(sorted);
    } else {
        actual = vecToStr(result);
    }
    string status = (actual == expected) ? "PASS" : "FAIL";
    cout << "{\\"testNum\\":" << num << ",\\"status\\":\\"" << status << "\\",\\"input\\":" << inputStr << ",\\"expected\\":\\"" << jsonEscape(expected) << "\\",\\"actual\\":\\"" << jsonEscape(actual) << "\\"}" << endl;
}

void runTest(int num, bool result, const string& expected, const string& inputStr) {
    string actual = result ? "true" : "false";
    string status = (actual == expected) ? "PASS" : "FAIL";
    cout << "{\\"testNum\\":" << num << ",\\"status\\":\\"" << status << "\\",\\"input\\":" << inputStr << ",\\"expected\\":\\"" << jsonEscape(expected) << "\\",\\"actual\\":\\"" << jsonEscape(actual) << "\\"}" << endl;
}

void runTest(int num, int result, const string& expected, const string& inputStr) {
    string actual = to_string(result);
    string status = (actual == expected) ? "PASS" : "FAIL";
    cout << "{\\"testNum\\":" << num << ",\\"status\\":\\"" << status << "\\",\\"input\\":" << inputStr << ",\\"expected\\":\\"" << jsonEscape(expected) << "\\",\\"actual\\":\\"" << jsonEscape(actual) << "\\"}" << endl;
}

void runTest(int num, string result, const string& expected, const string& inputStr) {
    string status = (result == expected) ? "PASS" : "FAIL";
    cout << "{\\"testNum\\":" << num << ",\\"status\\":\\"" << status << "\\",\\"input\\":" << inputStr << ",\\"expected\\":\\"" << jsonEscape(expected) << "\\",\\"actual\\":\\"" << jsonEscape(result) << "\\"}" << endl;
}

int main() {
    Solution solution;
${cases}
    return 0;
}`;
}

export function buildRunnableCode(language, userCode, question) {
  switch (language) {
    case 'python':
      return buildPythonHarness(userCode, question);
    case 'javascript':
      return buildJavaScriptHarness(userCode, question);
    case 'java':
      return buildJavaHarness(userCode, question);
    case 'cpp':
      return buildCppHarness(userCode, question);
    default:
      return normalizeUserCode(userCode, language);
  }
}

export function parseTestResults(stdout, hasErrors = false) {
  if (hasErrors) return { passed: 0, failed: 0, total: 0, allPassed: false, hasErrors: true };
  if (!stdout) return { passed: 0, failed: 0, total: 0, allPassed: !hasErrors };
  const passed = (stdout.match(/(\[PASS\] Test \d+|"status":"PASS")/g) || []).length;
  const failed = (stdout.match(/(\[FAIL\] Test \d+|"status":"(FAIL|ERROR)")/g) || []).length;
  const total = passed + failed;
  const allPassed = !hasErrors && (total > 0 ? failed === 0 : true);
  return { passed, failed, total, allPassed };
}

export function parseStructuredResults(stdout) {
  if (!stdout) return [];
  const results = [];
  for (const line of stdout.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('{')) continue;
    try {
      const obj = JSON.parse(trimmed);
      if (obj.testNum !== undefined && obj.status) {
        results.push({
          testNum: Number(obj.testNum),
          status: obj.status,
          input: obj.input,
          expected: obj.expected,
          actual: obj.actual,
        });
      }
    } catch (_) { /* skip malformed lines */ }
  }
  return results;
}

export function formatExecutionOutput(result) {
  const lines = [];
  if (result.compile?.stderr) {
    lines.push('═══ COMPILE ERROR ═══');
    lines.push(result.compile.stderr);
  }
  if (result.run?.stderr) {
    lines.push('═══ RUNTIME ERROR ═══');
    lines.push(result.run.stderr);
  }
  if (result.run?.stdout) {
    lines.push('═══ OUTPUT ═══');
    lines.push(result.run.stdout);
  }
  if (!lines.length) {
    lines.push('No output produced.');
  }
  return lines.join('\n');
}

export function executionHasErrors(result, stdout) {
  const structured = parseStructuredResults(stdout);
  const compileFailed = result.compile && result.compile.code !== 0;
  const runFailed = result.run && result.run.code !== 0;
  return compileFailed || (runFailed && structured.length === 0);
}
