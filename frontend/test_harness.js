import fs from 'fs';
import path from 'path';

// Import everything from codeRunner.js indirectly, or just evaluate it.
const codeRunnerPath = path.join(process.cwd(), 'src/placement-coach/codeRunner.js');
const questionsPath = path.join(process.cwd(), 'src/placement-coach/dsaQuestions.js');

let codeRunnerCode = fs.readFileSync(codeRunnerPath, 'utf-8');
let questionsCode = fs.readFileSync(questionsPath, 'utf-8');

// We can just evaluate the files in the node context.
questionsCode = questionsCode.replace('export const DSA_QUESTIONS =', 'global.DSA_QUESTIONS =');
eval(questionsCode);

const questions = global.DSA_QUESTIONS;

const helperFns = `
const HELPER_NAMES = new Set(['normalize', 'runTest', 'vecToStr', 'jsonEscape', '_normalize', '_run_test']);
`;

codeRunnerCode = codeRunnerCode.replace('export function getFunctionCandidates', 'function getFunctionCandidates');
codeRunnerCode = codeRunnerCode.replace('export function generateTestHarness', 'global.generateTestHarness = function generateTestHarness');
codeRunnerCode = helperFns + "\n" + codeRunnerCode;

try {
  eval(codeRunnerCode);
} catch (e) {
  console.error("Failed to eval codeRunner.js:", e);
  process.exit(1);
}

const langs = ['python', 'javascript', 'java', 'cpp'];
let errors = [];

for (const q of questions) {
  for (const lang of langs) {
    if (!q.starterCode || !q.starterCode[lang]) continue;
    
    try {
      const harness = global.generateTestHarness(q.starterCode[lang], q, lang);
      if (!harness) {
        errors.push("[" + lang + "] " + q.id + ": Harness is empty");
      }
    } catch (e) {
      errors.push("[" + lang + "] " + q.id + ": Generation error: " + e.message);
    }
  }
}

if (errors.length > 0) {
  console.log("Errors found during harness generation:");
  errors.forEach(e => console.log(e));
} else {
  console.log("All harnesses generated successfully! Now writing to a test file...");
  
  const testPythonHarness = global.generateTestHarness(
    "class Solution:\\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\\n        return 0\\n",
    questions.find(q => q.id === 'maximum-depth-of-binary-tree'),
    'python'
  );
  fs.writeFileSync('test_python_harness.py', testPythonHarness);
  console.log("Wrote test_python_harness.py");
}
