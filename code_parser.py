import ast

node = ast.parse("""
import os
import sys
from datetime import datetime, timedelta

score = 100
print(score)
""")

# print(node)

print(ast.dump(node, indent=2))