/** Coding problems asked in campus placements, with solutions and complexity. */

export const topics = [
  'Arrays',
  'Strings',
  'Sorting',
  'Linked List',
  'Stack & Queue',
  'Trees',
  'Graphs',
  'Dynamic Programming',
  'Math',
  'Bit Manipulation'
]

export const codingProblems = [
  {
    id: 'c-1',
    title: 'Reverse a String',
    difficulty: 'Easy',
    topic: 'Strings',
    companies: ['tcs', 'cognizant', 'capgemini', 'wipro'],
    frequency: 95,
    asked: 1240,
    description:
      'Given a string, return its characters in reverse order. Do not use built-in reverse functions.',
    example: 'Input: "interview"\nOutput: "weivretni"',
    approach:
      'Use a two-pointer approach: one pointer at the start, one at the end, swapping characters until they meet in the middle.',
    solution: `def reverse_string(s: str) -> str:
    chars = list(s)
    left, right = 0, len(chars) - 1
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
    return ''.join(chars)`,
    complexity: { time: 'O(n)', space: 'O(n)' }
  },
  {
    id: 'c-2',
    title: 'Fermat Theorem Remainder',
    difficulty: 'Medium',
    topic: 'Math',
    companies: ['tcs'],
    frequency: 88,
    asked: 980,
    description:
      'For a given number N and a prime P, compute (P-2)! mod P without loops up to P. This is a TCS favourite.',
    example: 'Input: N = 10\nOutput: 1',
    approach:
      "Use Fermat's Little Theorem: for prime P, (P-1)! mod P = P-1, therefore (P-2)! mod P = 1. Return 1 for any prime P greater than 2.",
    solution: `def fermat_remainder(p: int) -> int:
    if p <= 2:
        return 0
    return 1`,
    complexity: { time: 'O(1)', space: 'O(1)' }
  },
  {
    id: 'c-3',
    title: 'Find the Second Largest Element',
    difficulty: 'Easy',
    topic: 'Arrays',
    companies: ['infosys', 'tcs', 'cognizant'],
    frequency: 92,
    asked: 1380,
    description:
      'Given an array of integers, find the second largest distinct element without sorting the array.',
    example: 'Input: [7, 3, 9, 9, 2]\nOutput: 7',
    approach:
      'Track the largest and second largest in a single pass. Treat equal values as the same, so duplicates do not count as second largest.',
    solution: `def second_largest(nums):
    first = second = float('-inf')
    for n in nums:
        if n > first:
            first, second = n, first
        elif n != first and n > second:
            second = n
    return None if second == float('-inf') else second`,
    complexity: { time: 'O(n)', space: 'O(1)' }
  },
  {
    id: 'c-4',
    title: 'Count Vowels in a String',
    difficulty: 'Easy',
    topic: 'Strings',
    companies: ['tcs', 'wipro', 'capgemini', 'tech-mahindra'],
    frequency: 97,
    asked: 1610,
    description: 'Return the number of vowels (a, e, i, o, u) in a given string, ignoring case.',
    example: 'Input: "SeniorKnowledgeHub"\nOutput: 6',
    approach:
      'Normalise the string to lowercase, keep vowels in a set, and count. A set gives O(1) membership checks.',
    solution: `def count_vowels(s: str) -> int:
    vowels = set("aeiou")
    return sum(1 for ch in s.lower() if ch in vowels)`,
    complexity: { time: 'O(n)', space: 'O(1)' }
  },
  {
    id: 'c-5',
    title: 'Sort 0s, 1s and 2s (Dutch National Flag)',
    difficulty: 'Medium',
    topic: 'Sorting',
    companies: ['capgemini', 'infosys', 'accenture'],
    frequency: 74,
    asked: 760,
    description: 'Sort an array containing only 0, 1 and 2 in a single pass without using sorting functions.',
    example: 'Input: [2, 0, 2, 1, 1, 0]\nOutput: [0, 0, 1, 1, 2, 2]',
    approach:
      'Use three pointers (low, mid, high). mid inspects the current element and swaps it into the correct region, then advances.',
    solution: `def sort_colors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 2:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
        else:
            mid += 1
    return nums`,
    complexity: { time: 'O(n)', space: 'O(1)' }
  },
  {
    id: 'c-6',
    title: 'FizzBuzz',
    difficulty: 'Easy',
    topic: 'Strings',
    companies: ['tcs', 'cognizant', 'accenture'],
    frequency: 99,
    asked: 2100,
    description: 'Print "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for both, else the number.',
    example: 'Input: n = 15\nOutput: ... FizzBuzz',
    approach:
      'Check the FizzBuzz condition first, then divisibility by 3, then by 5, in that order.',
    solution: `def fizz_buzz(n: int) -> list:
    out = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            out.append("FizzBuzz")
        elif i % 3 == 0:
            out.append("Fizz")
        elif i % 5 == 0:
            out.append("Buzz")
        else:
            out.append(str(i))
    return out`,
    complexity: { time: 'O(n)', space: 'O(n)' }
  },
  {
    id: 'c-7',
    title: 'Print a Star Triangle Pattern',
    difficulty: 'Easy',
    topic: 'Strings',
    companies: ['tcs', 'cognizant', 'wipro', 'tech-mahindra'],
    frequency: 90,
    asked: 1180,
    description: 'Print a right-angled star pattern for a given number of rows.',
    example: 'Input: n = 4\nOutput:\n*\n**\n***\n****',
    approach: 'Use an outer loop for rows and an inner loop for columns. Break lines with print() instead of storing output.',
    solution: `def triangle(n: int) -> str:
    lines = []
    for row in range(1, n + 1):
        lines.append('*' * row)
    return '\\n'.join(lines)`,
    complexity: { time: 'O(n²)', space: 'O(n²)' }
  },
  {
    id: 'c-8',
    title: 'Check if Two Strings are Rotations',
    difficulty: 'Medium',
    topic: 'Strings',
    companies: ['tech-mahindra', 'infosys'],
    frequency: 61,
    asked: 540,
    description: 'Determine whether string b is a rotation of string a without extra space.',
    example: 'Input: a = "abcd", b = "cdab"\nOutput: True',
    approach:
      'Two strings are rotations of each other if and only if they have equal length and b appears inside the doubled string a + a.',
    solution: `def is_rotation(a: str, b: str) -> bool:
    return len(a) == len(b) and b in (a + a)`,
    complexity: { time: 'O(n)', space: 'O(n)' }
  },
  {
    id: 'c-9',
    title: 'Binary Search',
    difficulty: 'Medium',
    topic: 'Arrays',
    companies: ['infosys', 'accenture', 'wipro'],
    frequency: 78,
    asked: 890,
    description: 'Return the index of the target in a sorted array, or -1 if it is not present.',
    example: 'Input: [1, 3, 5, 7], target = 5\nOutput: 2',
    approach:
      'Binary search halves the search space each step. Be careful with mid calculation and the inclusive/exclusive boundary.',
    solution: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
    complexity: { time: 'O(log n)', space: 'O(1)' }
  },
  {
    id: 'c-10',
    title: 'Reverse a Linked List',
    difficulty: 'Medium',
    topic: 'Linked List',
    companies: ['accenture', 'infosys', 'deloitte'],
    frequency: 66,
    asked: 610,
    description: 'Reverse a singly linked list and return the new head.',
    example: 'Input: 1 -> 2 -> 3\nOutput: 3 -> 2 -> 1',
    approach:
      'Iteratively keep a previous pointer. At each node, flip its next pointer to the previous node and move both pointers forward.',
    solution: `def reverse_list(head):
    prev = None
    while head:
        nxt = head.next
        head.next = prev
        prev = head
        head = nxt
    return prev`,
    complexity: { time: 'O(n)', space: 'O(1)' }
  },
  {
    id: 'c-11',
    title: 'Longest Common Prefix',
    difficulty: 'Medium',
    topic: 'Arrays',
    companies: ['cognizant', 'tech-mahindra'],
    frequency: 57,
    asked: 430,
    description: 'Find the longest prefix shared by all strings in an array.',
    example: 'Input: ["flower", "flow", "flight"]\nOutput: "fl"',
    approach:
      'Compare the first string with each other string character by character, shrinking the prefix length as soon as a mismatch appears.',
    solution: `def longest_common_prefix(strs):
    if not strs:
        return ''
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ''
    return prefix`,
    complexity: { time: 'O(n · m)', space: 'O(1)' }
  },
  {
    id: 'c-12',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    topic: 'Stack & Queue',
    companies: ['tcs', 'cognizant', 'capgemini'],
    frequency: 86,
    asked: 1120,
    description: 'Given a string of brackets, return whether the brackets are balanced.',
    example: 'Input: "{[(]}"\nOutput: False',
    approach:
      'Push opening brackets onto a stack. On a closing bracket, pop and compare. At the end the stack must be empty.',
    solution: `def is_valid(s: str) -> bool:
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        else:
            if not stack or stack.pop() != pairs[ch]:
                return False
    return not stack`,
    complexity: { time: 'O(n)', space: 'O(n)' }
  },
  {
    id: 'c-13',
    title: 'Count Leaves in a Binary Tree',
    difficulty: 'Easy',
    topic: 'Trees',
    companies: ['deloitte', 'accenture'],
    frequency: 52,
    asked: 380,
    description: 'Return the number of leaf nodes in a binary tree.',
    example: 'Input: 1 → 2 → 3\nOutput: 2',
    approach:
      'Recursive DFS: a node is a leaf when both children are None. Otherwise sum the leaves of both subtrees.',
    solution: `def count_leaves(node):
    if node is None:
        return 0
    if node.left is None and node.right is None:
        return 1
    return count_leaves(node.left) + count_leaves(node.right)`,
    complexity: { time: 'O(n)', space: 'O(h)' }
  },
  {
    id: 'c-14',
    title: 'Detect a Cycle in a Linked List',
    difficulty: 'Medium',
    topic: 'Linked List',
    companies: ['infosys', 'wipro'],
    frequency: 49,
    asked: 340,
    description: 'Return true if the linked list contains a cycle.',
    example: 'Input: 1 → 2 → 3 → 1\nOutput: True',
    approach:
      "Use Floyd's cycle detection (slow and fast pointers). If they meet, a cycle exists. O(1) space, unlike a set of visited nodes.",
    solution: `def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False`,
    complexity: { time: 'O(n)', space: 'O(1)' }
  },
  {
    id: 'c-15',
    title: 'Coin Change Problem',
    difficulty: 'Medium',
    topic: 'Dynamic Programming',
    companies: ['deloitte', 'accenture', 'infosys'],
    frequency: 44,
    asked: 400,
    description: 'Given coins and a target, return the minimum number of coins needed, or -1 if impossible.',
    example: 'Input: coins = [1, 2, 5], target = 11\nOutput: 3',
    approach:
      'Bottom-up DP. Let dp[i] be the minimum coins needed for amount i. For each amount, try every coin that does not exceed it.',
    solution: `def coin_change(coins, target):
    dp = [target + 1] * (target + 1)
    dp[0] = 0
    for amount in range(1, target + 1):
        for coin in coins:
            if coin <= amount:
                dp[amount] = min(dp[amount], dp[amount - coin] + 1)
    return -1 if dp[target] > target else dp[target]`,
    complexity: { time: 'O(amount × coins)', space: 'O(amount)' }
  },
  {
    id: 'c-16',
    title: 'Find the Missing Number',
    difficulty: 'Easy',
    topic: 'Math',
    companies: ['tech-mahindra', 'capgemini'],
    frequency: 83,
    asked: 1020,
    description: 'Find the missing number in an array of unique numbers from 1 to n.',
    example: 'Input: [1, 2, 4, 5], n = 5\nOutput: 3',
    approach:
      'Use the sum formula: expected sum is n(n+1)/2. Subtract the sum of the array. O(n) time, O(1) space, no overflow in Python.',
    solution: `def find_missing(nums, n):
    return n * (n + 1) // 2 - sum(nums)`,
    complexity: { time: 'O(n)', space: 'O(1)' }
  },
  {
    id: 'c-17',
    title: 'Tower of Hanoi',
    difficulty: 'Medium',
    topic: 'Math',
    companies: ['wipro', 'cognizant'],
    frequency: 45,
    asked: 360,
    description: 'Move all disks from one peg to another using a temporary peg.',
    example: 'Input: n = 3\nOutput: 7 moves',
    approach:
      'Recursion: move n-1 disks to the auxiliary peg, move the largest disk, then move n-1 disks onto it.',
    solution: `def hanoi(n, source, aux, target, moves=None):
    moves = [] if moves is None else moves
    if n == 0:
        return moves
    hanoi(n - 1, source, target, aux, moves)
    moves.append((source, target))
    hanoi(n - 1, aux, source, target, moves)
    return moves`,
    complexity: { time: 'O(2ⁿ)', space: 'O(n)' }
  },
  {
    id: 'c-18',
    title: 'Count Bits Set in a Number',
    difficulty: 'Medium',
    topic: 'Bit Manipulation',
    companies: ['tcs', 'tech-mahindra'],
    frequency: 58,
    asked: 590,
    description: 'Count the number of set bits (1s) in the binary representation of an integer.',
    example: 'Input: 13 (1101)\nOutput: 3',
    approach:
      "Brian Kernighan's algorithm: repeatedly clear the lowest set bit with n & (n - 1) and count iterations. O(k) where k is the number of set bits.",
    solution: `def count_set_bits(n: int) -> int:
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count`,
    complexity: { time: 'O(k)', space: 'O(1)' }
  },
  {
    id: 'c-19',
    title: 'Level Order Traversal of a Tree',
    difficulty: 'Medium',
    topic: 'Trees',
    companies: ['deloitte', 'infosys'],
    frequency: 41,
    asked: 310,
    description: 'Return the level order (breadth-first) traversal of a binary tree as nested arrays.',
    example: 'Input: 1 → 2, 3\nOutput: [[1], [2, 3]]',
    approach:
      'Use a queue. Process one level at a time by recording the queue size at the start of each level.',
    solution: `from collections import deque

def level_order(root):
    if not root:
        return []
    result, queue = [], deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)
    return result`,
    complexity: { time: 'O(n)', space: 'O(n)' }
  },
  {
    id: 'c-20',
    title: 'Remove Duplicates from a List',
    difficulty: 'Easy',
    topic: 'Arrays',
    companies: ['infosys', 'accenture', 'capgemini'],
    frequency: 89,
    asked: 1310,
    description: 'Remove duplicate values from a list while preserving the original order.',
    example: 'Input: [1, 2, 2, 3, 1]\nOutput: [1, 2, 3]',
    approach:
      'A set gives O(n) average time. Iterate the list and append to a result list only when the value is new.',
    solution: `def remove_duplicates(nums):
    seen, out = set(), []
    for n in nums:
        if n not in seen:
            seen.add(n)
            out.append(n)
    return out`,
    complexity: { time: 'O(n)', space: 'O(n)' }
  }
]

export const problemsByCompany = (companyId) =>
  codingProblems.filter((problem) => problem.companies.includes(companyId))