import ast

class CodeParser:
    def __init__(self, code: str):
        self.code = code
        self.tree = None

    def parse(self):
        try:
            self.tree = ast.parse(self.code)
            return True, None
        except SyntaxError as e:
            return False, str(e)

    def get_functions(self):
        functions = []
        if not self.tree:
            return functions

        for node in ast.walk(self.tree):
            if isinstance(node, ast.FunctionDef):
                functions.append(node.name)

        return functions

    def get_imports(self):
        imports = []
        if not self.tree:
            return imports

        for node in ast.walk(self.tree):
            if isinstance(node, ast.Import):
                for n in node.names:
                    imports.append(n.name)

        return imports