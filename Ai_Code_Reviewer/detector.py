import ast
from Ai_Code_Reviewer.visitor import VariableVisitor

def find_issues(code):
    issues = []

    try:
        tree = ast.parse(code)
    except:
        return ["Syntax error"]

    visitor = VariableVisitor()
    visitor.visit(tree)

    unused = visitor.created - visitor.used

    for var in unused:
        issues.append(f"Unused variable: {var}")

    if "range(len(" in code:
        issues.append("Avoid range(len()), use direct iteration")

    return issues