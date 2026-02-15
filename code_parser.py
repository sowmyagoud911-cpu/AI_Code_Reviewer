import ast
from ai_suggester import suggest_code_improvements  # Import AI placeholder

def parse_and_format_code(user_code):
    """
    Parse Python code using AST and return AST structure + formatted code
    """
    try:
        # Parse code into AST
        parsed_code = ast.parse(user_code)

        # AST structure
        ast_structure = ast.dump(parsed_code, indent=4)

        # Formatted code
        formatted_code = ast.unparse(parsed_code)

        return ast_structure, formatted_code

    except Exception as e:
        return str(e), None


if __name__ == "__main__":
    print("=== AI Code Reviewer - Milestone 1 ===\n")
    
    # Accept multi-line user code
    print("Enter Python code (press Enter twice to finish):")
    user_lines = []
    while True:
        line = input()
        if line == "":
            break
        user_lines.append(line)
    
    user_code = "\n".join(user_lines)
    
    # Parse and format code
    ast_structure, formatted_code = parse_and_format_code(user_code)
    
    print("\n=== AST Structure ===")
    print(ast_structure)
    
    print("\n=== Formatted Code ===")
    if formatted_code:
        print(formatted_code)
    else:
        print("Error in parsing code.")

    # Call AI placeholder for suggestions
    if formatted_code:
        suggest_code_improvements(formatted_code)
