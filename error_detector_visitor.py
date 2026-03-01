import ast

code = """
import os
import sys
from datetime import datetime, timedelta

score = 100

while True:
    print(score)
"""

class AIReviewer(ast.NodeVisitor):

    def __init__(self):
        # Things created (Imports and Store)
        self.defined = set()

        # Things read (Load)
        self.used = set()

        # Infinite loop tracking
        self.infinite_loops = []

    # 1. Imports
    def visit_Import(self, node):
        for alias in node.names:
            print(alias)
            print(alias.name)
            self.defined.add(alias.name)
        self.generic_visit(node)

    def visit_ImportFrom(self, node):
        for alias in node.names:
            self.defined.add(alias.name)
        self.generic_visit(node)

    # 2. Variable
    def visit_Name(self, node):
        if isinstance(node.ctx, ast.Store):
            self.defined.add(node.id)
        elif isinstance(node.ctx, ast.Load):
            self.used.add(node.id)
        self.generic_visit(node)

    # 3. Infinite Loop Detection
    def visit_While(self, node):
        if isinstance(node.test, ast.Constant) and node.test.value == True:
            self.infinite_loops.append(
                "Infinite loop detected: 'while True' condition always evaluates to True."
            )
        self.generic_visit(node)

    # 4. The Final Report
    def report_unused(self):
        # We subtract 'used' from 'defined'
        # We also ignore 'print' because
        # it's a built-in function, not our variable
        unused = self.defined - self.used

        print("\n--- AI REVIEW REPORT ---\n")

        if unused:
            for item in unused:
                print(f"UNUSED ITEM FOUND: {item}")
                print(f"Description: '{item}' is defined but never used in the program.\n")
        else:
            print("No unused imports or variables found.\n")

        # Infinite loop reporting
        if self.infinite_loops:
            print("INFINITE LOOP ANALYSIS:\n")
            for loop in self.infinite_loops:
                print(loop)
                print("Description: This loop will run forever unless a break condition is added.\n")
        else:
            print("No infinite loops detected.\n")


# Execution
tree = ast.parse(code)
reviewer = AIReviewer()
reviewer.visit(tree)
reviewer.report_unused()