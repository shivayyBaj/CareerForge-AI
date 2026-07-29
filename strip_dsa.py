import sys

with open('backend/routers/placement_coach.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = False
for i, line in enumerate(lines):
    # Skip Request Models
    if line.startswith('class ExecuteCodeRequest(BaseModel):'):
        skip = True
    if skip and line.startswith('class AnalyzeInterviewRequest'):
        skip = False

    # Skip Supported Languages
    if line.startswith('SUPPORTED_LANGUAGES ='):
        continue

    # Skip execute-code endpoint
    if line.startswith('@router.post("/execute-code")'):
        skip = True
    
    # Analyze interview is the next endpoint after get-solution
    if skip and line.startswith('@router.post("/analyze-interview")'):
        skip = False
    
    if not skip:
        new_lines.append(line)

with open('backend/routers/placement_coach.py', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
