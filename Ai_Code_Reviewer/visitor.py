import ast

class VariableVisitor(ast.NodeVisitor):
    def __init__(self):
        self.created = set()
        self.used = set()

    def visit_Name(self, node):
        if isinstance(node.ctx, ast.Store):
            self.created.add(node.id)
        elif isinstance(node.ctx, ast.Load):
            self.used.add(node.id)
        self.generic_visit(node)