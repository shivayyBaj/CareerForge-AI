
export const DSA_QUESTIONS = [
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "topic": "1-D Dynamic Programming",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "examples": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "1+1 or 2"
      },
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "1+1+1, 1+2, or 2+1"
      }
    ],
    "constraints": [
      "1 <= n <= 45"
    ],
    "functionName": "climb_stairs",
    "starterCode": {
      "python": "def climb_stairs(n):\n    # Return number of distinct ways to climb n stairs\n    pass",
      "javascript": "function climbStairs(n) {\n  // Return number of distinct ways to climb n stairs\n}",
      "java": "class Solution {\n    public int climbStairs(int n) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int climbStairs(int n) {\n        return 0;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "n": 2
        },
        "expected": 2
      },
      {
        "args": {
          "n": 3
        },
        "expected": 3
      },
      {
        "args": {
          "n": 5
        },
        "expected": 8
      },
      {
        "args": {
          "n": 1
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "min-cost-climbing-stairs",
    "title": "Min Cost Climbing Stairs",
    "difficulty": "Easy",
    "topic": "1-D Dynamic Programming",
    "description": "You are given an integer array cost where cost[i] is the cost of the ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the first step, or the second step, so cost[0] and cost[1] counts in your total cost. Return the minimum cost to reach the top of the floor. It is guaranteed that the array has at least two elements. The length of the array will not exceed 1000. The elements in the array will be in the range [0, 999].",
    "examples": [
      {
        "input": "cost = [10,15,20]",
        "output": "15",
        "explanation": "Cheapest is start on cost[1], only one step; total cost is 15."
      },
      {
        "input": "cost = [1,100,1,1,1,100,1,1,100,1]",
        "output": "6",
        "explanation": "Cheapest is alternate step, skipping the expensive one."
      }
    ],
    "constraints": [
      "2 <= cost.length <= 1000",
      "0 <= cost[i] <= 999"
    ],
    "functionName": "min_cost_climbing_stairs",
    "starterCode": {
      "python": "def min_cost_climbing_stairs(*args):\n    # Write your solution here\n    pass",
      "javascript": "function minCostClimbingStairs(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object minCostClimbingStairs(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minCostClimbingStairs(vector<int>& cost) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "cost": [
            10,
            15,
            20
          ]
        },
        "expected": 15
      },
      {
        "args": {
          "cost": [
            1,
            100,
            1,
            1,
            1,
            100,
            1,
            1,
            100,
            1
          ]
        },
        "expected": 6
      },
      {
        "args": {
          "cost": [
            0,
            2,
            2,
            1
          ]
        },
        "expected": 2
      }
    ]
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You may assume that you have an unlimited number of each kind of coin.",
    "examples": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1"
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "-1",
        "explanation": "You can't make up 3 with only 2"
      }
    ],
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 231 - 1",
      "0 <= amount <= 231 - 1"
    ],
    "functionName": "coin_change",
    "starterCode": {
      "python": "def coin_change(*args):\n    # Write your solution here\n    pass",
      "javascript": "function coinChange(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object coinChange(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "coins": [
            1,
            2,
            5
          ],
          "amount": 11
        },
        "expected": 3
      },
      {
        "args": {
          "coins": [
            2
          ],
          "amount": 3
        },
        "expected": -1
      },
      {
        "args": {
          "coins": [
            1
          ],
          "amount": 0
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "decode-ways",
    "title": "Decode Ways",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "A message containing letters from A-Z can be encoded into numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. Given a non-empty string containing only digits, determine the number of ways to decode it. The encoding is '1' -> 'A', '2' -> 'B', ..., '26' -> 'Z'. For example, the following s would return 2, because '12' could be either 'AB' or 'L'. '3' is 'D', so there is only one way for '3'.",
    "examples": [
      {
        "input": "s = \"12\"",
        "output": "2",
        "explanation": "\"12\" could be either \"AB\" or \"L\""
      },
      {
        "input": "s = \"226\"",
        "output": "3",
        "explanation": "\"226\" could be \"BZ\" (2 26), \"VF\" (22 6), or \"BB\" (2 2 6)"
      }
    ],
    "constraints": [
      "1 <= s.length <= 100",
      "s contains only the digits '0' through '9' and possibly '.*'."
    ],
    "functionName": "decode_ways",
    "starterCode": {
      "python": "def decode_ways(*args):\n    # Write your solution here\n    pass",
      "javascript": "function decodeWays(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object decodeWays(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int decodeWays(string& s) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "12"
        },
        "expected": 2
      },
      {
        "args": {
          "s": "226"
        },
        "expected": 3
      },
      {
        "args": {
          "s": "0"
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "house-robber",
    "title": "House Robber",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "You are a professional thief planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. The maximum amount of money you can rob is the maximum of the maximum amount of money you can rob up to the current house and the maximum amount of money you can rob up to the previous house plus the amount of money in the current house. The function should return the maximum amount of money you can rob.",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "4",
        "explanation": "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total money you can rob = 1 + 3 = 4."
      },
      {
        "input": "nums = [2,7,9,3,1]",
        "output": "12",
        "explanation": "Rob house 1 (money = 2), rob house 3 (money = 9), and rob house 5 (money = 1). Total money you can rob = 2 + 9 + 1 = 12."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 400"
    ],
    "functionName": "house_robber",
    "starterCode": {
      "python": "def house_robber(*args):\n    # Write your solution here\n    pass",
      "javascript": "function houseRobber(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object houseRobber(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int houseRobber(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            2,
            3,
            1
          ]
        },
        "expected": 4
      },
      {
        "args": {
          "nums": [
            2,
            7,
            9,
            3,
            1
          ]
        },
        "expected": 12
      },
      {
        "args": {
          "nums": [
            2,
            1,
            1,
            2
          ]
        },
        "expected": 4
      }
    ]
  },
  {
    "id": "house-robber-ii",
    "title": "House Robber II",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "You are a professional thief planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. The maximum amount of money you can rob is the maximum of the maximum amount of money you can rob up to the current house and the maximum amount of money you can rob up to the previous house plus the amount of money in the current house. The function should return the maximum amount of money you can rob. Note that this is a circular street, meaning the first house is connected to the last house.",
    "examples": [
      {
        "input": "nums = [2,3,2]",
        "output": "3",
        "explanation": "You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent. So you can only rob house 2 (money = 3)."
      },
      {
        "input": "nums = [1,2,3,1]",
        "output": "4",
        "explanation": "You can rob house 1 (money = 1) and then rob house 3 (money = 3). Total money you can rob = 1 + 3 = 4."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 400"
    ],
    "functionName": "house_robber_ii",
    "starterCode": {
      "python": "def house_robber_ii(*args):\n    # Write your solution here\n    pass",
      "javascript": "function houseRobberIi(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object houseRobberIi(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int houseRobberIi(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            2,
            3,
            2
          ]
        },
        "expected": 3
      },
      {
        "args": {
          "nums": [
            1,
            2,
            3,
            1
          ]
        },
        "expected": 4
      },
      {
        "args": {
          "nums": [
            1,
            2,
            3
          ]
        },
        "expected": 3
      }
    ]
  },
  {
    "id": "longest-increasing-subsequence",
    "title": "Longest Increasing Subsequence",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "Given an integer array nums, return the length of the longest increasing subsequence. A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements. For example, [3,6,7,12] is a subsequence of [0,3,6,5,7,12]. The function should return the length of the longest increasing subsequence.",
    "examples": [
      {
        "input": "nums = [10,9,2,5,3,7,101,18]",
        "output": "4",
        "explanation": "The longest increasing subsequence is [2,3,7,101], therefore the length is 4."
      },
      {
        "input": "nums = [0,1,0,3,2,3]",
        "output": "4",
        "explanation": "The longest increasing subsequence is [0,1,2,3], therefore the length is 4."
      }
    ],
    "constraints": [
      "0 <= nums.length <= 10^4",
      "0 <= nums[i] <= 10^4"
    ],
    "functionName": "longest_increasing_subsequence",
    "starterCode": {
      "python": "def longest_increasing_subsequence(*args):\n    # Write your solution here\n    pass",
      "javascript": "function longestIncreasingSubsequence(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object longestIncreasingSubsequence(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestIncreasingSubsequence(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            10,
            9,
            2,
            5,
            3,
            7,
            101,
            18
          ]
        },
        "expected": 4
      },
      {
        "args": {
          "nums": [
            0,
            1,
            0,
            3,
            2,
            3
          ]
        },
        "expected": 4
      },
      {
        "args": {
          "nums": [
            7,
            7,
            7,
            7
          ]
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "longest-palindromic-substring",
    "title": "Longest Palindromic Substring",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "Given a string s, return the longest palindromic substring in s. A string is called a palindrome string if the reverse of the string is the same as the original string. The input string s will only contain English letters. The function should return the longest palindromic substring. If there are multiple palindromic substrings with the same maximum length, the function should return the first one it encounters. The function should handle empty strings and strings with only one character.",
    "examples": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "explanation": "The longest palindromic substring is \"bab\" or \"aba\". The function returns the first one it encounters, which is \"bab\"."
      },
      {
        "input": "s = \"cbbd\"",
        "output": "\"bb\"",
        "explanation": "The longest palindromic substring is \"bb\"."
      }
    ],
    "constraints": [
      "1 <= s.length <= 1000",
      "s consist of only digits and English letters (lower-case and/or upper-case)",
      "The input string s will only contain English letters"
    ],
    "functionName": "longest_palindromic_substring",
    "starterCode": {
      "python": "def longest_palindromic_substring(*args):\n    # Write your solution here\n    pass",
      "javascript": "function longestPalindromicSubstring(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object longestPalindromicSubstring(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string longestPalindromicSubstring(string& s) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "babad"
        },
        "expected": "bab"
      },
      {
        "args": {
          "s": "cbbd"
        },
        "expected": "bb"
      },
      {
        "args": {
          "s": "a"
        },
        "expected": "a"
      }
    ]
  },
  {
    "id": "maximum-product-subarray",
    "title": "Maximum Product Subarray",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "Given an integer array nums, find the contiguous subarray within the array which has the largest product. The function should return the maximum product of the subarray. The input array nums will contain at least one element. The function should handle arrays with negative numbers and zero.",
    "examples": [
      {
        "input": "nums = [2,3,-2,4]",
        "output": "6",
        "explanation": "The maximum product of the subarray is [2,3] which has a product of 6."
      },
      {
        "input": "nums = [-2,0,-1]",
        "output": "0",
        "explanation": "The maximum product of the subarray is [0] which has a product of 0."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-10 <= nums[i] <= 10",
      "The input array nums will contain at least one element"
    ],
    "functionName": "maximum_product_subarray",
    "starterCode": {
      "python": "def maximum_product_subarray(*args):\n    # Write your solution here\n    pass",
      "javascript": "function maximumProductSubarray(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object maximumProductSubarray(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maximumProductSubarray(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            2,
            3,
            -2,
            4
          ]
        },
        "expected": 6
      },
      {
        "args": {
          "nums": [
            -2,
            0,
            -1
          ]
        },
        "expected": 0
      },
      {
        "args": {
          "nums": [
            0,
            2
          ]
        },
        "expected": 2
      }
    ]
  },
  {
    "id": "palindromic-substrings",
    "title": "Palindromic Substrings",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "Given a string s, return all the palindromic substrings in s. A string is called a palindrome string if the reverse of the string is the same as the original string. The input string s will only contain English letters. The function should return all the palindromic substrings in s.",
    "examples": [
      {
        "input": "s = \"abc\"",
        "output": "[\"a\",\"b\",\"c\"]",
        "explanation": "The palindromic substrings are \"a\", \"b\", and \"c\"."
      },
      {
        "input": "s = \"aaa\"",
        "output": "[\"a\",\"a\",\"a\",\"aa\",\"aa\",\"aaa\"]",
        "explanation": "The palindromic substrings are \"a\", \"a\", \"a\", \"aa\", \"aa\", and \"aaa\"."
      }
    ],
    "constraints": [
      "1 <= s.length <= 1000",
      "s consist of only digits and English letters (lower-case and/or upper-case)",
      "The input string s will only contain English letters"
    ],
    "functionName": "palindromic_substrings",
    "starterCode": {
      "python": "def palindromic_substrings(*args):\n    # Write your solution here\n    pass",
      "javascript": "function palindromicSubstrings(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object palindromicSubstrings(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<char> palindromicSubstrings(string& s) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "abc"
        },
        "expected": [
          "a",
          "b",
          "c"
        ]
      },
      {
        "args": {
          "s": "aaa"
        },
        "expected": [
          "a",
          "a",
          "a",
          "aa",
          "aa",
          "aaa"
        ]
      },
      {
        "args": {
          "s": "a"
        },
        "expected": [
          "a"
        ]
      }
    ]
  },
  {
    "id": "partition-equal-subset-sum",
    "title": "Partition Equal Subset Sum",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "Given an array of integers nums, return true if you can partition the array into two subsets such that the sum of elements in both subsets is equal. Each element in the array can only be used once in the partition. The array will only contain positive integers. The sum of all elements in the array is guaranteed to be even. Return false if it is not possible to partition the array into two subsets with equal sum. The length of the input array is in the range [1, 200]. The total sum of the elements in the input array is in the range [1, 10^4].",
    "examples": [
      {
        "input": "nums = [1,5,11,5]",
        "output": "true",
        "explanation": "The array can be partitioned as [1, 5, 5] and [11] or [5, 5, 11] and [1]."
      },
      {
        "input": "nums = [1,2,3,5]",
        "output": "false",
        "explanation": "There is no way to partition the array into two subsets with equal sum."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 200",
      "1 <= nums[i] <= 100",
      "The length of the input array is in the range [1, 200].",
      "The total sum of the elements in the input array is in the range [1, 10^4]."
    ],
    "functionName": "partition_equal_subset_sum",
    "starterCode": {
      "python": "def partition_equal_subset_sum(*args):\n    # Write your solution here\n    pass",
      "javascript": "function partitionEqualSubsetSum(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object partitionEqualSubsetSum(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool partitionEqualSubsetSum(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            5,
            11,
            5
          ]
        },
        "expected": true
      },
      {
        "args": {
          "nums": [
            1,
            2,
            3,
            5
          ]
        },
        "expected": false
      },
      {
        "args": {
          "nums": [
            1,
            1
          ]
        },
        "expected": true
      }
    ]
  },
  {
    "id": "word-break",
    "title": "Word Break",
    "difficulty": "Medium",
    "topic": "1-D Dynamic Programming",
    "description": "Given a string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. The same word in the word dictionary may be reused multiple times in the segmentation. Return true if s can be segmented, false otherwise. The input string will only contain lowercase English letters. The dictionary words will only contain lowercase English letters. The length of the input string is in the range [1, 300]. The length of each word in the dictionary is in the range [1, 20]. The number of words in the dictionary is in the range [1, 5000].",
    "examples": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true",
        "explanation": "The string can be segmented as \"leet\" and \"code\"."
      },
      {
        "input": "s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]",
        "output": "true",
        "explanation": "The string can be segmented as \"apple\" and \"pen\" and \"apple\"."
      }
    ],
    "constraints": [
      "1 <= s.length <= 300",
      "1 <= wordDict.length <= 5000",
      "1 <= wordDict[i].length <= 20",
      "s contains only lowercase English letters."
    ],
    "functionName": "word_break",
    "starterCode": {
      "python": "def word_break(*args):\n    # Write your solution here\n    pass",
      "javascript": "function wordBreak(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object wordBreak(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool wordBreak(string& s, vector<char>& wordDict) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "leetcode",
          "wordDict": [
            "leet",
            "code"
          ]
        },
        "expected": true
      },
      {
        "args": {
          "s": "applepenapple",
          "wordDict": [
            "apple",
            "pen"
          ]
        },
        "expected": true
      },
      {
        "args": {
          "s": "catsandog",
          "wordDict": [
            "cats",
            "dog",
            "sand",
            "and",
            "cat"
          ]
        },
        "expected": false
      }
    ]
  },
  {
    "id": "best-time-to-buy-and-sell-stock-with-cooldown",
    "title": "Best Time to Buy And Sell Stock With Cooldown",
    "difficulty": "Medium",
    "topic": "2-D Dynamic Programming",
    "description": "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by completing at most one transaction (i.e., buy one and sell one share of the stock). However, you cannot engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again). Find the maximum profit that can be achieved. The length of the input array is in the range [0, 5000]. The input array will only contain non-negative integers. The maximum value in the input array is in the range [0, 10^4].",
    "examples": [
      {
        "input": "prices = [1,2,3,0,2]",
        "output": "3",
        "explanation": "The maximum profit can be achieved by buying on day 0 and selling on day 2, then buying on day 3 and selling on day 4."
      },
      {
        "input": "prices = [1]",
        "output": "0",
        "explanation": "There is no way to make a profit with only one day."
      }
    ],
    "constraints": [
      "0 <= prices.length <= 5000",
      "0 <= prices[i] <= 10^4",
      "The length of the input array is in the range [0, 5000].",
      "The maximum value in the input array is in the range [0, 10^4]."
    ],
    "functionName": "best_time_to_buy_and_sell_stock_with_cooldown",
    "starterCode": {
      "python": "def best_time_to_buy_and_sell_stock_with_cooldown(*args):\n    # Write your solution here\n    pass",
      "javascript": "function bestTimeToBuyAndSellStockWithCooldown(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object bestTimeToBuyAndSellStockWithCooldown(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int bestTimeToBuyAndSellStockWithCooldown(vector<int>& prices) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "prices": [
            1,
            2,
            3,
            0,
            2
          ]
        },
        "expected": 3
      },
      {
        "args": {
          "prices": [
            1
          ]
        },
        "expected": 0
      },
      {
        "args": {
          "prices": [
            1,
            2,
            4
          ]
        },
        "expected": 3
      }
    ]
  },
  {
    "id": "coin-change-ii",
    "title": "Coin Change II",
    "difficulty": "Medium",
    "topic": "2-D Dynamic Programming",
    "description": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0. You may assume that each input would have exactly one possible solution. You can use each coin any number of times in your combinations.",
    "examples": [
      {
        "input": "coins = [1, 2, 5], amount = 5",
        "output": "4",
        "explanation": "There are four ways to make up the amount: 5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1"
      },
      {
        "input": "coins = [2], amount = 3",
        "output": "0",
        "explanation": "It is not possible to make up the amount of 3 using only coins of denomination 2"
      }
    ],
    "constraints": [
      "1 <= coins.length <= 300",
      "1 <= coins[i] <= 5000",
      "coins contains distinct positive integers",
      "0 <= amount <= 5000"
    ],
    "functionName": "coin_change_ii",
    "starterCode": {
      "python": "def coin_change_ii(*args):\n    # Write your solution here\n    pass",
      "javascript": "function coinChangeIi(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object coinChangeIi(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int coinChangeIi(int amount, vector<int>& coins) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "amount": 5,
          "coins": [
            1,
            2,
            5
          ]
        },
        "expected": 4
      },
      {
        "args": {
          "amount": 3,
          "coins": [
            2
          ]
        },
        "expected": 0
      },
      {
        "args": {
          "amount": 10,
          "coins": [
            10
          ]
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "edit-distance",
    "title": "Edit Distance",
    "difficulty": "Medium",
    "topic": "2-D Dynamic Programming",
    "description": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have three operations permitted on a word: Insert a character, Delete a character, Replace a character. You can use each operation any number of times in your conversions.",
    "examples": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "explanation": "horse -> rorse (replace 'h' with 'r') -> rose (replace 'h' with nothing) -> ros (remove 'e')"
      },
      {
        "input": "word1 = \"intention\", word2 = \"execution\"",
        "output": "5",
        "explanation": "intention -> inention (remove 't') -> exention (replace 'in' with 'ex') -> exection (replace 'n' with 'x') -> execution (replace 'n' with 'c')"
      }
    ],
    "constraints": [
      "0 <= word1.length, word2.length <= 500",
      "word1 and word2 consist of lowercase English letters"
    ],
    "functionName": "edit_distance",
    "starterCode": {
      "python": "def edit_distance(*args):\n    # Write your solution here\n    pass",
      "javascript": "function editDistance(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object editDistance(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int editDistance(string& word1, string& word2) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "word1": "horse",
          "word2": "ros"
        },
        "expected": 3
      },
      {
        "args": {
          "word1": "intention",
          "word2": "execution"
        },
        "expected": 5
      },
      {
        "args": {
          "word1": "kitten",
          "word2": "sitting"
        },
        "expected": 3
      }
    ]
  },
  {
    "id": "interleaving-string",
    "title": "Interleaving String",
    "difficulty": "Medium",
    "topic": "2-D Dynamic Programming",
    "description": "Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2. An interleaving of two strings s and t is created by taking a character from either s or t and appending it to the result. If there are multiple solutions, you can return true if you find any of them. If it is not possible to form s3 by interleaving s1 and s2, return false.",
    "examples": [
      {
        "input": "s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"",
        "output": "true",
        "explanation": "One possible interleaving is \"aa\" from s1, \"db\" from s2, \"bb\" from s2, \"cc\" from s1, \"ca\" from s1, and \"c\" from s2"
      },
      {
        "input": "s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbbaccc\"",
        "output": "false",
        "explanation": "It is not possible to form s3 by interleaving s1 and s2"
      }
    ],
    "constraints": [
      "0 <= s1.length, s2.length <= 100",
      "0 <= s3.length <= 200",
      "s1, s2, and s3 consist of lowercase English letters"
    ],
    "functionName": "interleaving_string",
    "starterCode": {
      "python": "def interleaving_string(*args):\n    # Write your solution here\n    pass",
      "javascript": "function interleavingString(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object interleavingString(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool interleavingString(string& s1, string& s2, string& s3) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s1": "aabcc",
          "s2": "dbbca",
          "s3": "aadbbcbcac"
        },
        "expected": true
      },
      {
        "args": {
          "s1": "aabcc",
          "s2": "dbbca",
          "s3": "aadbbbaccc"
        },
        "expected": false
      },
      {
        "args": {
          "s1": "a",
          "s2": "b",
          "s3": "ab"
        },
        "expected": true
      }
    ]
  },
  {
    "id": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "difficulty": "Medium",
    "topic": "2-D Dynamic Programming",
    "description": "Given two sequences, find the length of the longest subsequence present in both of them. A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. The sequences can be strings or arrays of integers. The function should return the length of the longest common subsequence. For example, given two sequences [1, 2, 3, 4, 5] and [1, 3, 4], the longest common subsequence is [1, 3, 4] and the length is 3.",
    "examples": [
      {
        "input": "text1 = \"abcde\", text2 = \"ace\"",
        "output": "3",
        "explanation": "The longest common subsequence is \"ace\""
      },
      {
        "input": "text1 = \"abc\", text2 = \"def\"",
        "output": "0",
        "explanation": "There is no common subsequence"
      }
    ],
    "constraints": [
      "1 <= text1.length, text2.length <= 1000",
      "text1 and text2 consist of lowercase English letters"
    ],
    "functionName": "longest_common_subsequence",
    "starterCode": {
      "python": "def longest_common_subsequence(*args):\n    # Write your solution here\n    pass",
      "javascript": "function longestCommonSubsequence(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object longestCommonSubsequence(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestCommonSubsequence(string& text1, string& text2) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "text1": "abcde",
          "text2": "ace"
        },
        "expected": 3
      },
      {
        "args": {
          "text1": "abc",
          "text2": "def"
        },
        "expected": 0
      },
      {
        "args": {
          "text1": "abcde",
          "text2": "abcde"
        },
        "expected": 5
      }
    ]
  },
  {
    "id": "target-sum",
    "title": "Target Sum",
    "difficulty": "Medium",
    "topic": "2-D Dynamic Programming",
    "description": "Given an array of integers and a target sum, find the number of ways to assign a plus or minus sign to each integer such that the sum of the resulting integers equals the target sum. The function should return the number of ways to achieve the target sum. For example, given the array [1, 1, 1, 1, 1] and the target sum 3, one way to achieve the target sum is to assign a plus sign to the first three integers and a minus sign to the last two integers.",
    "examples": [
      {
        "input": "nums = [1,1,1,1,1], target = 3",
        "output": "5",
        "explanation": "There are 5 ways to achieve the target sum: [1,1,1,-1,-1], [1,1,-1,1,-1], [1,1,-1,-1,1], [1,-1,1,1,-1], [-1,1,1,1,-1]"
      },
      {
        "input": "nums = [1], target = 1",
        "output": "1",
        "explanation": "There is only one way to achieve the target sum: [1]"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 20",
      "0 <= nums[i] <= 1000",
      "0 <= sum(nums) <= 1000"
    ],
    "functionName": "target_sum",
    "starterCode": {
      "python": "def target_sum(*args):\n    # Write your solution here\n    pass",
      "javascript": "function targetSum(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object targetSum(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int targetSum(vector<int>& nums, int target) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            1,
            1,
            1,
            1
          ],
          "target": 3
        },
        "expected": 5
      },
      {
        "args": {
          "nums": [
            1
          ],
          "target": 1
        },
        "expected": 1
      },
      {
        "args": {
          "nums": [
            1,
            0
          ],
          "target": 1
        },
        "expected": 2
      }
    ]
  },
  {
    "id": "unique-paths",
    "title": "Unique Paths",
    "difficulty": "Medium",
    "topic": "2-D Dynamic Programming",
    "description": "A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there? The function should return the number of unique paths. For example, given a 3x7 grid, the robot can move down to the second row, then right to the third column, then down to the third row, and finally right to the fourth column.",
    "examples": [
      {
        "input": "m = 3, n = 7",
        "output": "28",
        "explanation": "There are 28 unique paths to reach the bottom-right corner"
      },
      {
        "input": "m = 3, n = 2",
        "output": "3",
        "explanation": "There are 3 unique paths to reach the bottom-right corner"
      }
    ],
    "constraints": [
      "1 <= m, n <= 100",
      "Only the given input will be tested"
    ],
    "functionName": "unique_paths",
    "starterCode": {
      "python": "def unique_paths(*args):\n    # Write your solution here\n    pass",
      "javascript": "function uniquePaths(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object uniquePaths(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int uniquePaths(int m, int n) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "m": 3,
          "n": 7
        },
        "expected": 28
      },
      {
        "args": {
          "m": 3,
          "n": 2
        },
        "expected": 3
      },
      {
        "args": {
          "m": 23,
          "n": 12
        },
        "expected": 193536720
      }
    ]
  },
  {
    "id": "burst-balloons",
    "title": "Burst Balloons",
    "difficulty": "Hard",
    "topic": "2-D Dynamic Programming",
    "description": "Implement the algorithm for **Burst Balloons**.\n\nThis is a standard DSA question from the '2-D Dynamic Programming' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "burst_balloons",
    "starterCode": {
      "python": "def burst_balloons(*args):\n    # Write your solution here\n    pass",
      "javascript": "function burstBalloons(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object burstBalloons(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool burstBalloons(string& s, string& p) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "distinct-subsequences",
    "title": "Distinct Subsequences",
    "difficulty": "Hard",
    "topic": "2-D Dynamic Programming",
    "description": "Implement the algorithm for **Distinct Subsequences**.\n\nThis is a standard DSA question from the '2-D Dynamic Programming' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "distinct_subsequences",
    "starterCode": {
      "python": "def distinct_subsequences(*args):\n    # Write your solution here\n    pass",
      "javascript": "function distinctSubsequences(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object distinctSubsequences(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "longest-increasing-path-in-a-matrix",
    "title": "Longest Increasing Path In a Matrix",
    "difficulty": "Hard",
    "topic": "2-D Dynamic Programming",
    "description": "Implement the algorithm for **Longest Increasing Path In a Matrix**.\n\nThis is a standard DSA question from the '2-D Dynamic Programming' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "longest_increasing_path_in_a_matrix",
    "starterCode": {
      "python": "def longest_increasing_path_in_a_matrix(*args):\n    # Write your solution here\n    pass",
      "javascript": "function longestIncreasingPathInAMatrix(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object longestIncreasingPathInAMatrix(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "regular-expression-matching",
    "title": "Regular Expression Matching",
    "difficulty": "Hard",
    "topic": "2-D Dynamic Programming",
    "description": "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: (i) '.' matches any single character (ii) '*' matches zero or more of the preceding element. The matching should cover the entire string s and the entire pattern p, and should be case sensitive. The function should return true if the string matches the pattern, otherwise it returns false.",
    "examples": [
      {
        "input": "s = \"aa\", p = \"a\"",
        "output": "false",
        "explanation": "Because 'a' does not match the entire string \"aa\"."
      },
      {
        "input": "s = \"aa\", p = \"a*\"",
        "output": "true",
        "explanation": "Because '*' means zero or more of the preceding element, 'a*'."
      }
    ],
    "constraints": [
      "1 <= s.length <= 20",
      "1 <= p.length <= 30",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '.', and '*'."
    ],
    "functionName": "regular_expression_matching",
    "starterCode": {
      "python": "def regular_expression_matching(*args):\n    # Write your solution here\n    pass",
      "javascript": "function regularExpressionMatching(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object regularExpressionMatching(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool regularExpressionMatching(string& s, string& p) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "aa",
          "p": "a"
        },
        "expected": false
      },
      {
        "args": {
          "s": "aa",
          "p": "a*"
        },
        "expected": true
      },
      {
        "args": {
          "s": "ab",
          "p": ".*"
        },
        "expected": true
      }
    ]
  },
  {
    "id": "cheapest-flights-within-k-stops",
    "title": "Cheapest Flights Within K Stops",
    "difficulty": "Medium",
    "topic": "Advanced Graphs",
    "description": "There are n cities connected by m flights. Each fight starts from city a and arrives at city b with a cost. Now given all the flight information, we need to find the cheapest price to fly from city 0 to city destination with at most k stops. If there is no such route, the function should return -1.",
    "examples": [
      {
        "input": "n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1",
        "output": "200",
        "explanation": "The graph looks like this: The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as shown."
      },
      {
        "input": "n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0",
        "output": "500",
        "explanation": "The graph looks like this: The cheapest price from city 0 to city 2 with no stops costs 500, as shown."
      }
    ],
    "constraints": [
      "1 <= n <= 100",
      "0 <= m <= n * (n - 1)",
      "0 <= edges.length <= n * (n - 1)",
      "edges[i].length == 3"
    ],
    "functionName": "cheapest_flights_within_k_stops",
    "starterCode": {
      "python": "def cheapest_flights_within_k_stops(*args):\n    # Write your solution here\n    pass",
      "javascript": "function cheapestFlightsWithinKStops(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object cheapestFlightsWithinKStops(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int cheapestFlightsWithinKStops(int n, vector<vector<int>>& edges, int src, int dst, int k) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "n": 3,
          "edges": [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              0,
              2,
              500
            ]
          ],
          "src": 0,
          "dst": 2,
          "k": 1
        },
        "expected": 200
      },
      {
        "args": {
          "n": 3,
          "edges": [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              0,
              2,
              500
            ]
          ],
          "src": 0,
          "dst": 2,
          "k": 0
        },
        "expected": 500
      },
      {
        "args": {
          "n": 3,
          "edges": [
            [
              0,
              1,
              100
            ],
            [
              1,
              2,
              100
            ],
            [
              0,
              2,
              500
            ]
          ],
          "src": 0,
          "dst": 2,
          "k": 2
        },
        "expected": 200
      }
    ]
  },
  {
    "id": "min-cost-to-connect-all-points",
    "title": "Min Cost to Connect All Points",
    "difficulty": "Medium",
    "topic": "Advanced Graphs",
    "description": "You are given an array points where points[i] = [xi, yi] is a point on the X-Y plane. You need to find the minimum cost to make all points connected. An edge can be constructed between any two points, and the cost of constructing an edge between two points is the Manhattan distance between them. The function should return the minimum cost to connect all points.",
    "examples": [
      {
        "input": "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]",
        "output": "20",
        "explanation": "All points are connected with a minimum cost of 20 as shown by the red lines."
      },
      {
        "input": "points = [[3,12],[-7,3],[-13,9],[15,0],[6,-1]]",
        "output": "34",
        "explanation": "All points are connected with a minimum cost of 34 as shown by the red lines."
      }
    ],
    "constraints": [
      "1 <= points.length <= 1000",
      "-10^6 <= xi, yi <= 10^6",
      "No two points have the same coordinates."
    ],
    "functionName": "min_cost_to_connect_all_points",
    "starterCode": {
      "python": "def min_cost_to_connect_all_points(*args):\n    # Write your solution here\n    pass",
      "javascript": "function minCostToConnectAllPoints(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object minCostToConnectAllPoints(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minCostToConnectAllPoints(vector<vector<int>>& points) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "points": [
            [
              0,
              0
            ],
            [
              2,
              2
            ],
            [
              3,
              10
            ],
            [
              5,
              2
            ],
            [
              7,
              0
            ]
          ]
        },
        "expected": 20
      },
      {
        "args": {
          "points": [
            [
              3,
              12
            ],
            [
              -7,
              3
            ],
            [
              -13,
              9
            ],
            [
              15,
              0
            ],
            [
              6,
              -1
            ]
          ]
        },
        "expected": 34
      },
      {
        "args": {
          "points": [
            [
              0,
              0
            ],
            [
              1,
              1
            ],
            [
              2,
              2
            ],
            [
              3,
              3
            ],
            [
              4,
              4
            ]
          ]
        },
        "expected": 10
      }
    ]
  },
  {
    "id": "network-delay-time",
    "title": "Network Delay Time",
    "difficulty": "Medium",
    "topic": "Advanced Graphs",
    "description": "Implement the algorithm for **Network Delay Time**.\n\nThis is a standard DSA question from the 'Advanced Graphs' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "network_delay_time",
    "starterCode": {
      "python": "def network_delay_time(*args):\n    # Write your solution here\n    pass",
      "javascript": "function networkDelayTime(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object networkDelayTime(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int networkDelayTime(vector<vector<int>>& grid) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "alien-dictionary",
    "title": "Alien Dictionary",
    "difficulty": "Hard",
    "topic": "Advanced Graphs",
    "description": "Implement the algorithm for **Alien Dictionary**.\n\nThis is a standard DSA question from the 'Advanced Graphs' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "alien_dictionary",
    "starterCode": {
      "python": "def alien_dictionary(*args):\n    # Write your solution here\n    pass",
      "javascript": "function alienDictionary(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object alienDictionary(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "reconstruct-itinerary",
    "title": "Reconstruct Itinerary",
    "difficulty": "Hard",
    "topic": "Advanced Graphs",
    "description": "Implement the algorithm for **Reconstruct Itinerary**.\n\nThis is a standard DSA question from the 'Advanced Graphs' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "reconstruct_itinerary",
    "starterCode": {
      "python": "def reconstruct_itinerary(*args):\n    # Write your solution here\n    pass",
      "javascript": "function reconstructItinerary(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object reconstructItinerary(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "swim-in-rising-water",
    "title": "Swim In Rising Water",
    "difficulty": "Hard",
    "topic": "Advanced Graphs",
    "description": "On an N x N grid, each cell is either a 0 (representing water) or a 1 (representing land). The water level is the cell with the lowest value which can be stepped on. You start at the top left cell. The goal is to move to the bottom right cell. The rules for moving are as follows: From a cell (i, j) you can move to any cell (i + 1, j), (i - 1, j), (i, j + 1), or (i, j - 1) if the destination cell's value is less than or equal to the water level. You can also move to any cell (i + 1, j), (i - 1, j), (i, j + 1), or (i, j - 1) if the destination cell's value is less than or equal to the current water level plus 1. You must return the minimum number of steps to move from the top left cell to the bottom right cell.",
    "examples": [
      {
        "input": "grid = [[0,1],[1,0]]",
        "output": "3",
        "explanation": "The minimum number of steps to move from the top left cell to the bottom right cell is 3"
      },
      {
        "input": "grid = [[0,0,0],[0,1,0],[0,0,0]]",
        "output": "3",
        "explanation": "The minimum number of steps to move from the top left cell to the bottom right cell is 3"
      }
    ],
    "constraints": [
      "2 <= N <= 50",
      "grid[i][j] is 0 or 1",
      "grid[0][0] == grid[N-1][N-1] == 0"
    ],
    "functionName": "swim_in_rising_water",
    "starterCode": {
      "python": "def swim_in_rising_water(*args):\n    # Write your solution here\n    pass",
      "javascript": "function swimInRisingWater(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object swimInRisingWater(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "grid": [
            [
              0,
              1
            ],
            [
              1,
              0
            ]
          ]
        },
        "expected": 3
      },
      {
        "args": {
          "grid": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              0,
              0,
              0
            ]
          ]
        },
        "expected": 3
      },
      {
        "args": {
          "grid": [
            [
              0,
              0,
              0,
              0,
              1
            ],
            [
              1,
              1,
              1,
              0,
              1
            ],
            [
              0,
              0,
              0,
              0,
              0
            ],
            [
              0,
              0,
              1,
              0,
              0
            ],
            [
              0,
              0,
              0,
              0,
              0
            ]
          ]
        },
        "expected": 16
      }
    ]
  },
  {
    "id": "contains-duplicate",
    "title": "Contains Duplicate",
    "difficulty": "Easy",
    "topic": "Arrays & Hashing",
    "description": "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true"
      },
      {
        "input": "nums = [1,2,3,4]",
        "output": "false"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "functionName": "contains_duplicate",
    "starterCode": {
      "python": "def contains_duplicate(nums):\n    # Return True if duplicates exist, else False\n    pass",
      "javascript": "function containsDuplicate(nums) {\n  // Return true if duplicates exist, else false\n}",
      "java": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        return false;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            2,
            3,
            1
          ]
        },
        "expected": true
      },
      {
        "args": {
          "nums": [
            1,
            2,
            3,
            4
          ]
        },
        "expected": false
      },
      {
        "args": {
          "nums": [
            1,
            1,
            1,
            3,
            3,
            4,
            3,
            2,
            4,
            2
          ]
        },
        "expected": true
      }
    ]
  },
  {
    "id": "two-sum",
    "title": "Two Sum",
    "difficulty": "Easy",
    "topic": "Arrays & Hashing",
    "description": "Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input has exactly one solution, and you may not use the same element twice.",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "nums[0] + nums[1] == 9"
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]"
      }
    ],
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "Only one valid answer exists"
    ],
    "functionName": "two_sum",
    "starterCode": {
      "python": "def two_sum(nums, target):\n    # Return indices [i, j] where nums[i] + nums[j] == target\n    pass",
      "javascript": "function twoSum(nums, target) {\n  // Return indices [i, j] where nums[i] + nums[j] == target\n}",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Return indices [i, j]\n        return new int[]{};\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        // Return indices [i, j]\n        return {};\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            2,
            7,
            11,
            15
          ],
          "target": 9
        },
        "expected": [
          0,
          1
        ]
      },
      {
        "args": {
          "nums": [
            3,
            2,
            4
          ],
          "target": 6
        },
        "expected": [
          1,
          2
        ]
      },
      {
        "args": {
          "nums": [
            3,
            3
          ],
          "target": 6
        },
        "expected": [
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "valid-anagram",
    "title": "Valid Anagram",
    "difficulty": "Easy",
    "topic": "Arrays & Hashing",
    "description": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      },
      {
        "input": "s = \"rat\", t = \"car\"",
        "output": "false"
      }
    ],
    "constraints": [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],
    "functionName": "is_anagram",
    "starterCode": {
      "python": "def is_anagram(s, t):\n    # Return True if t is an anagram of s\n    pass",
      "javascript": "function isAnagram(s, t) {\n  // Return true if t is an anagram of s\n}",
      "java": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        return false;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "anagram",
          "t": "nagaram"
        },
        "expected": true
      },
      {
        "args": {
          "s": "rat",
          "t": "car"
        },
        "expected": false
      }
    ]
  },
  {
    "id": "encode-and-decode-strings",
    "title": "Encode and Decode Strings",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "description": "Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and decoded back to the original list of strings. Each string is guaranteed to be in the format of strings consisting of lowercase letters, uppercase letters, and digits. You must implement an object to solve this problem. The object should have two methods: encode and decode. encode takes a list of strings as input and returns a single string. decode takes a single string as input and returns a list of strings.",
    "examples": [
      {
        "input": "strings = [\"leet\",\"code\",\"test\"]",
        "output": "[\"leet\",\"code\",\"test\"]",
        "explanation": "The encoded string is then sent over the network and decoded back to the original list of strings"
      },
      {
        "input": "strings = [\"hello\",\"world\"]",
        "output": "[\"hello\",\"world\"]",
        "explanation": "The encoded string is then sent over the network and decoded back to the original list of strings"
      }
    ],
    "constraints": [
      "1 <= strings.length <= 20000",
      "0 <= strings[i].length <= 20000",
      "strings[i] consists of any possible characters except the delimiter character"
    ],
    "functionName": "encode_and_decode_strings",
    "starterCode": {
      "python": "def encode_and_decode_strings(*args):\n    # Write your solution here\n    pass",
      "javascript": "function encodeAndDecodeStrings(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object encodeAndDecodeStrings(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<char> encodeAndDecodeStrings(vector<char>& strings) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "strings": [
            "leet",
            "code",
            "test"
          ]
        },
        "expected": [
          "leet",
          "code",
          "test"
        ]
      },
      {
        "args": {
          "strings": [
            "hello",
            "world"
          ]
        },
        "expected": [
          "hello",
          "world"
        ]
      },
      {
        "args": {
          "strings": [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
          ]
        },
        "expected": [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z"
        ]
      }
    ]
  },
  {
    "id": "group-anagrams",
    "title": "Group Anagrams",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "description": "Given an array of strings, group the anagrams together. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. The order of the output does not matter.",
    "examples": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
        "explanation": "The anagrams are grouped together"
      },
      {
        "input": "strs = [\"\"]",
        "output": "[[\"\"]]",
        "explanation": "The anagrams are grouped together"
      }
    ],
    "constraints": [
      "1 <= strs.length <= 10^4",
      "0 <= strs[i].length <= 100",
      "strs[i] consists of lowercase English letters"
    ],
    "functionName": "group_anagrams",
    "starterCode": {
      "python": "def group_anagrams(*args):\n    # Write your solution here\n    pass",
      "javascript": "function groupAnagrams(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object groupAnagrams(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<char>> groupAnagrams(vector<char>& strs) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "strs": [
            "eat",
            "tea",
            "tan",
            "ate",
            "nat",
            "bat"
          ]
        },
        "expected": [
          [
            "eat",
            "tea",
            "ate"
          ],
          [
            "tan",
            "nat"
          ],
          [
            "bat"
          ]
        ]
      },
      {
        "args": {
          "strs": [
            ""
          ]
        },
        "expected": [
          [
            ""
          ]
        ]
      },
      {
        "args": {
          "strs": [
            "a"
          ]
        },
        "expected": [
          [
            "a"
          ]
        ]
      }
    ]
  },
  {
    "id": "longest-consecutive-sequence",
    "title": "Longest Consecutive Sequence",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "description": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must make use of the signature given, i.e., function longestConsecutive(nums) { ... }. The function should return the length of the longest consecutive sequence. The sequence can be either increasing or decreasing. For example, [100, 4, 200, 1, 3, 2] has the longest consecutive sequence [1, 2, 3, 4], therefore the function should return 4. If there are multiple sequences with the same length, return the length of any one of them. If the input array is empty, return 0.",
    "examples": [
      {
        "input": "nums = [100, 4, 200, 1, 3, 2]",
        "output": "4",
        "explanation": "The longest consecutive sequence is [1, 2, 3, 4]."
      },
      {
        "input": "nums = [0,3,7,2,5,8,4,6,0,1]",
        "output": "9",
        "explanation": "The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]."
      }
    ],
    "constraints": [
      "0 <= nums.length <= 10^4",
      "0 <= nums[i] <= 10^9",
      "At most 10^4 calls will be made to longestConsecutive."
    ],
    "functionName": "longest_consecutive_sequence",
    "starterCode": {
      "python": "def longest_consecutive_sequence(*args):\n    # Write your solution here\n    pass",
      "javascript": "function longestConsecutiveSequence(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object longestConsecutiveSequence(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestConsecutiveSequence(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            100,
            4,
            200,
            1,
            3,
            2
          ]
        },
        "expected": 4
      },
      {
        "args": {
          "nums": [
            0,
            3,
            7,
            2,
            5,
            8,
            4,
            6,
            0,
            1
          ]
        },
        "expected": 9
      },
      {
        "args": {
          "nums": []
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "product-of-array-except-self",
    "title": "Product of Array Except Self",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "description": "Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i]. You must do this in O(n) without using division. The function should return an array of length n, where each element at index i is the product of all numbers in the input array except the one at i. For example, if the input array is [1, 2, 3, 4], the output should be [24, 12, 8, 6].",
    "examples": [
      {
        "input": "nums = [1, 2, 3, 4]",
        "output": "[24, 12, 8, 6]",
        "explanation": "For each element at index i, the output is the product of all numbers in the input array except the one at i."
      },
      {
        "input": "nums = [2, 3, 4, 5]",
        "output": "[60, 40, 30, 24]",
        "explanation": "For each element at index i, the output is the product of all numbers in the input array except the one at i."
      }
    ],
    "constraints": [
      "2 <= nums.length <= 10^5",
      "30 <= nums[i] <= 30",
      "-30 <= nums[i] <= 30"
    ],
    "functionName": "product_of_array_except_self",
    "starterCode": {
      "python": "def product_of_array_except_self(*args):\n    # Write your solution here\n    pass",
      "javascript": "function productOfArrayExceptSelf(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object productOfArrayExceptSelf(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> productOfArrayExceptSelf(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            2,
            3,
            4
          ]
        },
        "expected": [
          24,
          12,
          8,
          6
        ]
      },
      {
        "args": {
          "nums": [
            2,
            3,
            4,
            5
          ]
        },
        "expected": [
          60,
          40,
          30,
          24
        ]
      },
      {
        "args": {
          "nums": [
            1,
            1
          ]
        },
        "expected": [
          1,
          1
        ]
      }
    ]
  },
  {
    "id": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "description": "Given an integer array nums and an integer k, return the k most frequent elements in the array. You must do this in O(n log k) time complexity. The function should return the k most frequent elements in any order. If there are multiple elements with the same frequency, return any of them. For example, if the input array is [1,1,1,2,2,3] and k = 2, the output should be [1,2] or [2,1].",
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]",
        "explanation": "The two most frequent elements are 1 and 2."
      },
      {
        "input": "nums = [1]",
        "output": "[1]",
        "explanation": "The only element in the array is 1."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "k is in the range [1, the number of unique elements in the array]",
      "It is guaranteed that the answer is unique."
    ],
    "functionName": "top_k_frequent_elements",
    "starterCode": {
      "python": "def top_k_frequent_elements(*args):\n    # Write your solution here\n    pass",
      "javascript": "function topKFrequentElements(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object topKFrequentElements(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> topKFrequentElements(vector<int>& nums, int k) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            1,
            1,
            2,
            2,
            3
          ],
          "k": 2
        },
        "expected": [
          1,
          2
        ]
      },
      {
        "args": {
          "nums": [
            1
          ],
          "k": 1
        },
        "expected": [
          1
        ]
      },
      {
        "args": {
          "nums": [
            1,
            2
          ],
          "k": 2
        },
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "id": "valid-sudoku",
    "title": "Valid Sudoku",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "description": "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated. A valid Sudoku board is one where each row, column, and 3x3 sub-box contains the numbers 1-9 without repetition. The board is represented as a 2D array of size 9x9, where empty cells are represented by '.'. Return true if the Sudoku board is valid, and false otherwise.",
    "examples": [
      {
        "input": "board = [['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]",
        "output": "true",
        "explanation": "The board is valid because each row, column, and 3x3 sub-box contains the numbers 1-9 without repetition."
      },
      {
        "input": "board = [['8','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','7','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]",
        "output": "false",
        "explanation": "The board is not valid because the number 8 is repeated in the first row."
      }
    ],
    "constraints": [
      "board.length == 9",
      "board[i].length == 9",
      "board[i][j] is a digit 1-9 or '.'."
    ],
    "functionName": "valid_sudoku",
    "starterCode": {
      "python": "def valid_sudoku(*args):\n    # Write your solution here\n    pass",
      "javascript": "function validSudoku(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object validSudoku(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool validSudoku(vector<vector<char>>& board) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "board": [
            [
              "5",
              "3",
              ".",
              ".",
              "7",
              ".",
              ".",
              ".",
              "."
            ],
            [
              "6",
              ".",
              ".",
              "1",
              "9",
              "5",
              ".",
              ".",
              "."
            ],
            [
              ".",
              "9",
              "8",
              ".",
              ".",
              ".",
              ".",
              "6",
              "."
            ],
            [
              "8",
              ".",
              ".",
              ".",
              "6",
              ".",
              ".",
              ".",
              "3"
            ],
            [
              "4",
              ".",
              ".",
              "8",
              ".",
              "3",
              ".",
              ".",
              "1"
            ],
            [
              "7",
              ".",
              ".",
              ".",
              "2",
              ".",
              ".",
              ".",
              "6"
            ],
            [
              ".",
              "6",
              ".",
              ".",
              ".",
              ".",
              "2",
              "8",
              "."
            ],
            [
              ".",
              ".",
              ".",
              "4",
              "1",
              "9",
              ".",
              ".",
              "5"
            ],
            [
              ".",
              ".",
              ".",
              ".",
              "8",
              ".",
              ".",
              "7",
              "9"
            ]
          ]
        },
        "expected": true
      },
      {
        "args": {
          "board": [
            [
              "8",
              "3",
              ".",
              ".",
              "7",
              ".",
              ".",
              ".",
              "."
            ],
            [
              "6",
              ".",
              ".",
              "1",
              "9",
              "5",
              ".",
              ".",
              "."
            ],
            [
              ".",
              "9",
              "7",
              ".",
              ".",
              ".",
              ".",
              "6",
              "."
            ],
            [
              "8",
              ".",
              ".",
              ".",
              "6",
              ".",
              ".",
              ".",
              "3"
            ],
            [
              "4",
              ".",
              ".",
              "8",
              ".",
              "3",
              ".",
              ".",
              "1"
            ],
            [
              "7",
              ".",
              ".",
              ".",
              "2",
              ".",
              ".",
              ".",
              "6"
            ],
            [
              ".",
              "6",
              ".",
              ".",
              ".",
              ".",
              "2",
              "8",
              "."
            ],
            [
              ".",
              ".",
              ".",
              "4",
              "1",
              "9",
              ".",
              ".",
              "5"
            ],
            [
              ".",
              ".",
              ".",
              ".",
              "8",
              ".",
              ".",
              "7",
              "9"
            ]
          ]
        },
        "expected": false
      },
      {
        "args": {
          "board": [
            [
              ".",
              ".",
              ".",
              ".",
              "5",
              ".",
              ".",
              ".",
              "."
            ],
            [
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              "."
            ],
            [
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              "."
            ],
            [
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              "."
            ],
            [
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              "."
            ],
            [
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              "."
            ],
            [
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              "."
            ],
            [
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              "."
            ],
            [
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              ".",
              "."
            ]
          ]
        },
        "expected": true
      }
    ]
  },
  {
    "id": "combination-sum",
    "title": "Combination Sum",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "description": "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations in candidates where the candidate number is a number that can sum up to target. The same number may be used an unlimited number of times. Each combination should be a list of numbers (with the same length), and answer should be sorted in ascending order.",
    "examples": [
      {
        "input": "candidates = [2,3,6,7], target = 7",
        "output": "[[2,2,3],[7]]",
        "explanation": "2+2+3=7 and 7=7, so the answer is [[2,2,3],[7]]."
      },
      {
        "input": "candidates = [2,3,5], target = 8",
        "output": "[[2,2,2,2],[2,3,3],[3,5]]",
        "explanation": "2+2+2+2=8, 2+3+3=8, and 3+5=8, so the answer is [[2,2,2,2],[2,3,3],[3,5]]."
      }
    ],
    "constraints": [
      "1 <= candidates.length <= 50",
      "1 <= candidates[i] <= 100",
      "candidate is a distinct integer",
      "1 <= target <= 200"
    ],
    "functionName": "combination_sum",
    "starterCode": {
      "python": "def combination_sum(*args):\n    # Write your solution here\n    pass",
      "javascript": "function combinationSum(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object combinationSum(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "candidates": [
            2,
            3,
            6,
            7
          ],
          "target": 7
        },
        "expected": [
          [
            2,
            2,
            3
          ],
          [
            7
          ]
        ]
      },
      {
        "args": {
          "candidates": [
            2,
            3,
            5
          ],
          "target": 8
        },
        "expected": [
          [
            2,
            2,
            2,
            2
          ],
          [
            2,
            3,
            3
          ],
          [
            3,
            5
          ]
        ]
      },
      {
        "args": {
          "candidates": [
            2
          ],
          "target": 1
        },
        "expected": []
      }
    ]
  },
  {
    "id": "combination-sum-ii",
    "title": "Combination Sum II",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "description": "Given a collection of candidate numbers (candidates) and a target number (target) , find all unique combinations in candidates where the candidate number sums to target. Each number in candidates may only be used once in the combination. Return a list of all unique combinations where the candidate number sums up to target without using any number more than once. The same combination in a different order is considered duplicate. You may assume that every input would have exactly one solution and you may not use the same element more than once.",
    "examples": [
      {
        "input": "candidates = [10,1,2,7,6,1,5], target = 8",
        "output": "[[1,1,6],[1,2,5],[1,7],[2,6]]",
        "explanation": "1+1+6=8, 1+2+5=8, 1+7=8, and 2+6=8, so the answer is [[1,1,6],[1,2,5],[1,7],[2,6]]."
      },
      {
        "input": "candidates = [2,5,2,1,2], target = 5",
        "output": "[[1,2,2],[5]]",
        "explanation": "1+2+2=5 and 5=5, so the answer is [[1,2,2],[5]]."
      }
    ],
    "constraints": [
      "1 <= candidates.length <= 100",
      "1 <= candidates[i] <= 100",
      "1 <= target <= 500"
    ],
    "functionName": "combination_sum_ii",
    "starterCode": {
      "python": "def combination_sum_ii(*args):\n    # Write your solution here\n    pass",
      "javascript": "function combinationSumIi(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object combinationSumIi(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> combinationSumIi(vector<int>& candidates, int target) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "candidates": [
            10,
            1,
            2,
            7,
            6,
            1,
            5
          ],
          "target": 8
        },
        "expected": [
          [
            1,
            1,
            6
          ],
          [
            1,
            2,
            5
          ],
          [
            1,
            7
          ],
          [
            2,
            6
          ]
        ]
      },
      {
        "args": {
          "candidates": [
            2,
            5,
            2,
            1,
            2
          ],
          "target": 5
        },
        "expected": [
          [
            1,
            2,
            2
          ],
          [
            5
          ]
        ]
      },
      {
        "args": {
          "candidates": [
            1
          ],
          "target": 1
        },
        "expected": [
          [
            1
          ]
        ]
      }
    ]
  },
  {
    "id": "generate-parentheses",
    "title": "Generate Parentheses",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "description": "The set of possible subsets that are generated from a set of distinct elements is sometimes called the power set. Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. The function should return a list of strings, where each string represents a combination of well-formed parentheses. The order of the output does not matter. The input n is a positive integer. The output should not contain any invalid combinations of parentheses.",
    "examples": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
        "explanation": "The output contains all possible combinations of well-formed parentheses for n = 3."
      },
      {
        "input": "n = 1",
        "output": "[\"()\"]",
        "explanation": "The output contains all possible combinations of well-formed parentheses for n = 1."
      }
    ],
    "constraints": [
      "1 <= n <= 8",
      "The input n is a positive integer."
    ],
    "functionName": "generate_parentheses",
    "starterCode": {
      "python": "def generate_parentheses(*args):\n    # Write your solution here\n    pass",
      "javascript": "function generateParentheses(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object generateParentheses(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<char> generateParentheses(int n) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "n": 3
        },
        "expected": [
          "((()))",
          "(()())",
          "(())()",
          "()(())",
          "()()()"
        ]
      },
      {
        "args": {
          "n": 1
        },
        "expected": [
          "()"
        ]
      },
      {
        "args": {
          "n": 4
        },
        "expected": [
          "(((())))",
          "((()()))",
          "((())())",
          "((()))()",
          "(()(()))",
          "(()()())",
          "(()())()",
          "(())(())",
          "(())()()",
          "()((()))",
          "()(()())",
          "()(())()",
          "()()(())",
          "()()()()"
        ]
      }
    ]
  },
  {
    "id": "letter-combinations-of-a-phone-number",
    "title": "Letter Combinations of a Phone Number",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "description": "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. The mapping of digits to letters is as follows: '2' -> 'a', 'b', 'c', '3' -> 'd', 'e', 'f', '4' -> 'g', 'h', 'i', '5' -> 'j', 'k', 'l', '6' -> 'm', 'n', 'o', '7' -> 'p', 'q', 'r', 's', '8' -> 't', 'u', 'v', '9' -> 'w', 'x', 'y', 'z'. The input string will not contain any non-digit characters and will not be empty. The output should not contain any invalid combinations of letters.",
    "examples": [
      {
        "input": "digits = \"23\"",
        "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]",
        "explanation": "The output contains all possible combinations of letters that the number could represent."
      },
      {
        "input": "digits = \"\"}",
        "output": "[]",
        "explanation": "The input string is empty, so the output is an empty list."
      }
    ],
    "constraints": [
      "0 <= digits.length <= 4",
      "digits[i] is a digit from '2' to '9' for all i in range digits.length."
    ],
    "functionName": "letter_combinations_of_a_phone_number",
    "starterCode": {
      "python": "def letter_combinations_of_a_phone_number(*args):\n    # Write your solution here\n    pass",
      "javascript": "function letterCombinationsOfAPhoneNumber(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object letterCombinationsOfAPhoneNumber(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<char> letterCombinationsOfAPhoneNumber(string& digits) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "digits": "23"
        },
        "expected": [
          "ad",
          "ae",
          "af",
          "bd",
          "be",
          "bf",
          "cd",
          "ce",
          "cf"
        ]
      },
      {
        "args": {
          "digits": ""
        },
        "expected": []
      },
      {
        "args": {
          "digits": "2"
        },
        "expected": [
          "a",
          "b",
          "c"
        ]
      }
    ]
  },
  {
    "id": "palindrome-partitioning",
    "title": "Palindrome Partitioning",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "description": "Given a string s, partition s into all possible palindrome partitions. The function should return a list of lists of strings, where each inner list represents a partition of the input string into palindromes. The order of the output does not matter. The input string will not contain any non-alphanumeric characters and will not be empty. The output should not contain any invalid partitions of the input string.",
    "examples": [
      {
        "input": "s = \"aab\"",
        "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]}",
        "explanation": "The output contains all possible partitions of the input string into palindromes."
      },
      {
        "input": "s = \"abba\"",
        "output": "[[\"a\",\"b\",\"b\",\"a\"],[\"a\",\"bb\",\"a\"],[\"abba\"]]}",
        "explanation": "The output contains all possible partitions of the input string into palindromes."
      }
    ],
    "constraints": [
      "1 <= s.length <= 16",
      "s consists of lowercase English letters."
    ],
    "functionName": "palindrome_partitioning",
    "starterCode": {
      "python": "def palindrome_partitioning(*args):\n    # Write your solution here\n    pass",
      "javascript": "function palindromePartitioning(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object palindromePartitioning(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<char>> palindromePartitioning(string& s) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "aab"
        },
        "expected": [
          [
            "a",
            "a",
            "b"
          ],
          [
            "aa",
            "b"
          ]
        ]
      },
      {
        "args": {
          "s": "abba"
        },
        "expected": [
          [
            "a",
            "b",
            "b",
            "a"
          ],
          [
            "a",
            "bb",
            "a"
          ],
          [
            "abba"
          ]
        ]
      },
      {
        "args": {
          "s": "a"
        },
        "expected": [
          [
            "a"
          ]
        ]
      }
    ]
  },
  {
    "id": "permutations",
    "title": "Permutations",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "description": "Given a collection of distinct numbers, return all possible permutations. The given numbers can be in any order and do not need to be in a specific order in the output. Each permutation must be a list of numbers. The output should be a list of lists, where each sublist is a permutation of the input list. The length of the input list will be between 1 and 6. The input list will contain distinct numbers. The output should not contain duplicate permutations.",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        "explanation": "The output contains all possible permutations of the input list [1,2,3]."
      },
      {
        "input": "nums = [0,1]",
        "output": "[[0,1],[1,0]]",
        "explanation": "The output contains all possible permutations of the input list [0,1]."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 6",
      "The input list will contain distinct numbers.",
      "The length of the input list will be between 1 and 6."
    ],
    "functionName": "permutations",
    "starterCode": {
      "python": "def permutations(*args):\n    # Write your solution here\n    pass",
      "javascript": "function permutations(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object permutations(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> permutations(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            2,
            3
          ]
        },
        "expected": [
          [
            1,
            2,
            3
          ],
          [
            1,
            3,
            2
          ],
          [
            2,
            1,
            3
          ],
          [
            2,
            3,
            1
          ],
          [
            3,
            1,
            2
          ],
          [
            3,
            2,
            1
          ]
        ]
      },
      {
        "args": {
          "nums": [
            0,
            1
          ]
        },
        "expected": [
          [
            0,
            1
          ],
          [
            1,
            0
          ]
        ]
      },
      {
        "args": {
          "nums": [
            5,
            4,
            3
          ]
        },
        "expected": [
          [
            5,
            4,
            3
          ],
          [
            5,
            3,
            4
          ],
          [
            4,
            5,
            3
          ],
          [
            4,
            3,
            5
          ],
          [
            3,
            5,
            4
          ],
          [
            3,
            4,
            5
          ]
        ]
      }
    ]
  },
  {
    "id": "subsets",
    "title": "Subsets",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "description": "Given a set of distinct integers, nums, return all possible subsets (the power set). The solution set must not contain duplicate subsets. The subsets should be sorted in ascending (lexicographic) order. The input list will contain distinct numbers. The length of the input list will be between 1 and 10.",
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
        "explanation": "The output contains all possible subsets of the input list [1,2,3]."
      },
      {
        "input": "nums = [0]",
        "output": "[[],[0]]",
        "explanation": "The output contains all possible subsets of the input list [0]."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10",
      "The input list will contain distinct numbers.",
      "The length of the input list will be between 1 and 10."
    ],
    "functionName": "subsets",
    "starterCode": {
      "python": "def subsets(*args):\n    # Write your solution here\n    pass",
      "javascript": "function subsets(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object subsets(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            2,
            3
          ]
        },
        "expected": [
          [],
          [
            1
          ],
          [
            2
          ],
          [
            1,
            2
          ],
          [
            3
          ],
          [
            1,
            3
          ],
          [
            2,
            3
          ],
          [
            1,
            2,
            3
          ]
        ]
      },
      {
        "args": {
          "nums": [
            0
          ]
        },
        "expected": [
          [],
          [
            0
          ]
        ]
      },
      {
        "args": {
          "nums": [
            4,
            1,
            0
          ]
        },
        "expected": [
          [],
          [
            4
          ],
          [
            1
          ],
          [
            4,
            1
          ],
          [
            0
          ],
          [
            4,
            0
          ],
          [
            1,
            0
          ],
          [
            4,
            1,
            0
          ]
        ]
      }
    ]
  },
  {
    "id": "subsets-ii",
    "title": "Subsets II",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "description": "Given a collection of integers, nums, that may contain duplicates, nums, return all possible subsets (the power set). The solution set must not contain duplicate subsets. The subsets should be sorted in ascending (lexicographic) order. The input list will contain integers. The length of the input list will be between 1 and 10.",
    "examples": [
      {
        "input": "nums = [1,2,2]",
        "output": "[[],[1],[2],[1,2],[2,2],[1,2,2]]",
        "explanation": "The output contains all possible subsets of the input list [1,2,2]."
      },
      {
        "input": "nums = [0]",
        "output": "[[],[0]]",
        "explanation": "The output contains all possible subsets of the input list [0]."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10",
      "The input list will contain integers.",
      "The length of the input list will be between 1 and 10."
    ],
    "functionName": "subsets_ii",
    "starterCode": {
      "python": "def subsets_ii(*args):\n    # Write your solution here\n    pass",
      "javascript": "function subsetsIi(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object subsetsIi(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> subsetsIi(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            2,
            2
          ]
        },
        "expected": [
          [],
          [
            1
          ],
          [
            2
          ],
          [
            1,
            2
          ],
          [
            2,
            2
          ],
          [
            1,
            2,
            2
          ]
        ]
      },
      {
        "args": {
          "nums": [
            0
          ]
        },
        "expected": [
          [],
          [
            0
          ]
        ]
      },
      {
        "args": {
          "nums": [
            4,
            4,
            4,
            1,
            4
          ]
        },
        "expected": [
          [],
          [
            4
          ],
          [
            1
          ],
          [
            4,
            4
          ],
          [
            4,
            1
          ],
          [
            4,
            4,
            4
          ],
          [
            4,
            4,
            1
          ],
          [
            4,
            4,
            4,
            4
          ],
          [
            4,
            4,
            4,
            1
          ],
          [
            4,
            4,
            4,
            4,
            1
          ]
        ]
      }
    ]
  },
  {
    "id": "word-search",
    "title": "Word Search",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "description": "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cell, where adjacent cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once. If the word does not exist, return false. The word can start with any cell. The input is case sensitive. The word can be in any of the eight directions (up, down, left, right, and four diagonal directions).",
    "examples": [
      {
        "input": "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]\nword = 'ABCCED'",
        "output": "true",
        "explanation": "The word 'ABCCED' can be found in the grid by starting at the top left cell and moving right and then down."
      },
      {
        "input": "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]\nword = 'SEE'",
        "output": "true",
        "explanation": "The word 'SEE' can be found in the grid by starting at the middle left cell and moving right and then down."
      },
      {
        "input": "board = [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']]\nword = 'ABCB'",
        "output": "false",
        "explanation": "The word 'ABCB' cannot be found in the grid because the letter 'B' is not adjacent to the letter 'C' in the grid."
      }
    ],
    "constraints": [
      "m == board.length",
      "n == board[i].length",
      "1 <= m * n <= 6 * 10^4",
      "1 <= word.length <= 10^3"
    ],
    "functionName": "word_search",
    "starterCode": {
      "python": "def word_search(*args):\n    # Write your solution here\n    pass",
      "javascript": "function wordSearch(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object wordSearch(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool wordSearch(vector<vector<char>>& board, string& word) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "board": [
            [
              "A",
              "B",
              "C",
              "E"
            ],
            [
              "S",
              "F",
              "C",
              "S"
            ],
            [
              "A",
              "D",
              "E",
              "E"
            ]
          ],
          "word": "ABCCED"
        },
        "expected": true
      },
      {
        "args": {
          "board": [
            [
              "A",
              "B",
              "C",
              "E"
            ],
            [
              "S",
              "F",
              "C",
              "S"
            ],
            [
              "A",
              "D",
              "E",
              "E"
            ]
          ],
          "word": "SEE"
        },
        "expected": true
      },
      {
        "args": {
          "board": [
            [
              "A",
              "B",
              "C",
              "E"
            ],
            [
              "S",
              "F",
              "C",
              "S"
            ],
            [
              "A",
              "D",
              "E",
              "E"
            ]
          ],
          "word": "ABCB"
        },
        "expected": false
      }
    ]
  },
  {
    "id": "n-queens",
    "title": "N Queens",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "description": "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a placement of the n queens on the n x n chessboard such that no two queens attack each other. The solution does not need to be in any particular order. The input is an integer n, where n is the number of queens and the size of the chessboard.",
    "examples": [
      {
        "input": "n = 4",
        "output": "[['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]}",
        "explanation": "There are two distinct solutions to the 4-queens puzzle."
      },
      {
        "input": "n = 1",
        "output": "[['Q']]}",
        "explanation": "There is one distinct solution to the 1-queens puzzle."
      },
      {
        "input": "n = 0",
        "output": "[[]]",
        "explanation": "There is one distinct solution to the 0-queens puzzle, which is an empty board."
      }
    ],
    "constraints": [
      "1 <= n <= 9",
      "The input is an integer n, where n is the number of queens and the size of the chessboard."
    ],
    "functionName": "n_queens",
    "starterCode": {
      "python": "def n_queens(*args):\n    # Write your solution here\n    pass",
      "javascript": "function nQueens(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object nQueens(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<char>> nQueens(int n) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "n": 4
        },
        "expected": [
          [
            ".Q..",
            "...Q",
            "Q...",
            "..Q."
          ],
          [
            "..Q.",
            "Q...",
            "...Q",
            ".Q.."
          ]
        ]
      },
      {
        "args": {
          "n": 1
        },
        "expected": [
          [
            "Q"
          ]
        ]
      },
      {
        "args": {
          "n": 0
        },
        "expected": [
          []
        ]
      }
    ]
  },
  {
    "id": "binary-search",
    "title": "Binary Search",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "description": "Given a sorted array of integers `nums` and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not.",
    "examples": [
      {
        "input": "nums = [-1,0,3,5,9,12], target = 9",
        "output": "4"
      },
      {
        "input": "nums = [-1,0,3,5,9,12], target = 2",
        "output": "-1"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^4",
      "nums is sorted in ascending order"
    ],
    "functionName": "binary_search",
    "starterCode": {
      "python": "def binary_search(nums, target):\n    # Return index of target or -1\n    pass",
      "javascript": "function binarySearch(nums, target) {\n  // Return index of target or -1\n}",
      "java": "class Solution {\n    public int binarySearch(int[] nums, int target) {\n        return -1;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int binarySearch(vector<int>& nums, int target) {\n        return -1;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            -1,
            0,
            3,
            5,
            9,
            12
          ],
          "target": 9
        },
        "expected": 4
      },
      {
        "args": {
          "nums": [
            -1,
            0,
            3,
            5,
            9,
            12
          ],
          "target": 2
        },
        "expected": -1
      },
      {
        "args": {
          "nums": [
            5
          ],
          "target": 5
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "find-minimum-in-rotated-sorted-array",
    "title": "Find Minimum In Rotated Sorted Array",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "description": "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Given the rotated sorted array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time. The input is an array of integers, and the output is the minimum element in the array.",
    "examples": [
      {
        "input": "nums = [3,4,5,1,2]",
        "output": "1",
        "explanation": "The minimum element in the array is 1, which is the first element after the rotation point."
      },
      {
        "input": "nums = [4,5,6,7,0,1,2]",
        "output": "0",
        "explanation": "The minimum element in the array is 0, which is the first element after the rotation point."
      },
      {
        "input": "nums = [11,13,15,17]",
        "output": "11",
        "explanation": "The minimum element in the array is 11, which is the first element in the array because the array is not rotated."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 5000",
      "-5000 <= nums[i] <= 5000",
      "nums is a rotated sorted array of unique elements."
    ],
    "functionName": "find_minimum_in_rotated_sorted_array",
    "starterCode": {
      "python": "def find_minimum_in_rotated_sorted_array(*args):\n    # Write your solution here\n    pass",
      "javascript": "function findMinimumInRotatedSortedArray(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object findMinimumInRotatedSortedArray(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findMinimumInRotatedSortedArray(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            3,
            4,
            5,
            1,
            2
          ]
        },
        "expected": 1
      },
      {
        "args": {
          "nums": [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ]
        },
        "expected": 0
      },
      {
        "args": {
          "nums": [
            11,
            13,
            15,
            17
          ]
        },
        "expected": 11
      }
    ]
  },
  {
    "id": "koko-eating-bananas",
    "title": "Koko Eating Bananas",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "description": "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours to eat bananas. Koko can decide her banana-eating speed of units per hour. Each hour, she chooses some of the n piles of bananas and eats lambda bananas from each pile. If the piles[i] is less than lambda, she will eat all the bananas in the pile. If Koko doesn't eat all the bananas before the guards return, the guards will go angry. If Koko eats too many bananas in the first hour she gets a tummy ache and won't eat more that day. Return the minimum integer k such that she can eat all the bananas within h hours.",
    "examples": [
      {
        "input": "piles = [3,6,7,11], h = 8",
        "output": "4",
        "explanation": "Because the minimum speed Koko can have to eat all bananas is 4 bananas per hour. The first hour, Koko eats 3 bananas from the first pile and 1 banana from the second pile. The second hour, Koko eats 1 banana from the second pile and 2 bananas from the third pile and 1 banana from the fourth pile. The third hour, Koko eats 2 bananas from the third pile and 2 bananas from the fourth pile. The fourth hour, Koko eats 2 bananas from the fourth pile."
      },
      {
        "input": "piles = [30,11,23,4,20], h = 5",
        "output": "30",
        "explanation": "The minimum speed k and can be proved legally."
      }
    ],
    "constraints": [
      "1 <= piles.length <= 10^4",
      "piles.length <= h <= 10^9",
      "1 <= piles[i] <= 10^9"
    ],
    "functionName": "koko_eating_bananas",
    "starterCode": {
      "python": "def koko_eating_bananas(*args):\n    # Write your solution here\n    pass",
      "javascript": "function kokoEatingBananas(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object kokoEatingBananas(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int kokoEatingBananas(vector<int>& piles, int h) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "piles": [
            3,
            6,
            7,
            11
          ],
          "h": 8
        },
        "expected": 4
      },
      {
        "args": {
          "piles": [
            30,
            11,
            23,
            4,
            20
          ],
          "h": 5
        },
        "expected": 30
      },
      {
        "args": {
          "piles": [
            312884470
          ],
          "h": 312884469
        },
        "expected": 2
      }
    ]
  },
  {
    "id": "search-in-rotated-sorted-array",
    "title": "Search In Rotated Sorted Array",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "description": "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]). You are given the rotated array nums and an integer target. Return the index of the target if it is present in the array; otherwise, return -1. You must write an algorithm with a runtime of O(log n), where n is the number of elements in the array.",
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4",
        "explanation": "Target value 0 is found at index 4 in the rotated sorted array."
      },
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1",
        "explanation": "Target value 3 is not found in the rotated sorted array."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 5000",
      "nums[i] is a unique integer",
      "-10^4 <= nums[i] <= 10^4",
      "-10^4 <= target <= 10^4"
    ],
    "functionName": "search_in_rotated_sorted_array",
    "starterCode": {
      "python": "def search_in_rotated_sorted_array(*args):\n    # Write your solution here\n    pass",
      "javascript": "function searchInRotatedSortedArray(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object searchInRotatedSortedArray(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int searchInRotatedSortedArray(vector<int>& nums, int target) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ],
          "target": 0
        },
        "expected": 4
      },
      {
        "args": {
          "nums": [
            4,
            5,
            6,
            7,
            0,
            1,
            2
          ],
          "target": 3
        },
        "expected": -1
      },
      {
        "args": {
          "nums": [
            1
          ],
          "target": 0
        },
        "expected": -1
      }
    ]
  },
  {
    "id": "search-a-2d-matrix",
    "title": "Search a 2D Matrix",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "description": "Write an efficient algorithm that searches for a value in a 2D matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row. Given the matrix and a target, return the indices of the target if it is present in the matrix. Otherwise, return [-1, -1]. You must write an algorithm with a runtime of O(log(m * n)), where m is the number of rows and n is the number of columns.",
    "examples": [
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "output": "[0,1]",
        "explanation": "Target value 3 is found at row 0 and column 1 in the 2D matrix."
      },
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        "output": "[-1,-1]",
        "explanation": "Target value 13 is not found in the 2D matrix."
      }
    ],
    "constraints": [
      "1 <= matrix.length <= 100",
      "1 <= matrix[0].length <= 100",
      "-10^4 <= matrix[i][j] <= 10^4",
      "-10^4 <= target <= 10^4"
    ],
    "functionName": "search_a_2d_matrix",
    "starterCode": {
      "python": "def search_a_2d_matrix(*args):\n    # Write your solution here\n    pass",
      "javascript": "function searchA2dMatrix(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object searchA2dMatrix(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> searchA2dMatrix(vector<vector<int>>& matrix, int target) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "matrix": [
            [
              1,
              3,
              5,
              7
            ],
            [
              10,
              11,
              16,
              20
            ],
            [
              23,
              30,
              34,
              60
            ]
          ],
          "target": 3
        },
        "expected": [
          0,
          1
        ]
      },
      {
        "args": {
          "matrix": [
            [
              1,
              3,
              5,
              7
            ],
            [
              10,
              11,
              16,
              20
            ],
            [
              23,
              30,
              34,
              60
            ]
          ],
          "target": 13
        },
        "expected": [
          -1,
          -1
        ]
      },
      {
        "args": {
          "matrix": [
            [
              1
            ]
          ],
          "target": 0
        },
        "expected": [
          -1,
          -1
        ]
      }
    ]
  },
  {
    "id": "time-based-key-value-store",
    "title": "Time Based Key Value Store",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "description": "Create a timebased key-value store class TimeKeyStore, that supports two operations: store and get. The store method takes in a key, a value, and the timestamp (in seconds granularity) at which the key was stored with the given value. The get method takes the key and a timestamp, and returns a value such that the key had this value at the given timestamp if possible. If there are multiple such values, it returns the one with the most recent timestamp. If the key did not exist at the given timestamp, it returns null, and if the key has never been inserted, it returns null. The timebased key-value store must be implemented in a way that allows multiple threads to access the data structure concurrently while maintaining thread safety.",
    "examples": [
      {
        "input": "TimeKeyStore timeKeyStore = new TimeKeyStore(); timeKeyStore.store(1, 1, 0); timeKeyStore.store(2, 2, 0); timeKeyStore.get(1, 0); timeKeyStore.get(2, 0);",
        "output": "1, 2",
        "explanation": "The key 1 has value 1 at timestamp 0, and the key 2 has value 2 at timestamp 0."
      },
      {
        "input": "TimeKeyStore timeKeyStore = new TimeKeyStore(); timeKeyStore.store(1, 1, 0); timeKeyStore.get(1, -1);",
        "output": "null",
        "explanation": "The key 1 does not exist at timestamp -1."
      }
    ],
    "constraints": [
      "1 <= key <= 10^5",
      "0 <= value <= 10^8",
      "0 <= timestamp <= 2 * 10^7",
      "The total number of calls to the store and get methods will not exceed 10^4"
    ],
    "functionName": "time_based_key_value_store",
    "starterCode": {
      "python": "def time_based_key_value_store(*args):\n    # Write your solution here\n    pass",
      "javascript": "function timeBasedKeyValueStore(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object timeBasedKeyValueStore(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto timeBasedKeyValueStore(int key, int value, int timestamp) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "key": 1,
          "value": 1,
          "timestamp": 0
        },
        "expected": null
      },
      {
        "args": {
          "key": 1,
          "value": 1,
          "timestamp": 0
        },
        "expected": null
      },
      {
        "args": {
          "key": 1,
          "timestamp": 0
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "median-of-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "description": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(min(m,n))). You may assume nums1 and nums2 cannot be both empty. The median of a single number is the number itself, the median of two numbers is the average of the two numbers, and the median of more than two numbers is the middle number if the total number of numbers is odd, or the average of the two middle numbers if the total number of numbers is even.",
    "examples": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.00000",
        "explanation": "The median of the two sorted arrays is 2.00000"
      },
      {
        "input": "nums1 = [1,2], nums2 = [3,4]",
        "output": "2.50000",
        "explanation": "The median of the two sorted arrays is (2 + 3)/2 = 2.5"
      }
    ],
    "constraints": [
      "0 < m + n <= 2 * 10^4",
      "-10^6 <= nums1[i], nums2[i] <= 10^6"
    ],
    "functionName": "median_of_two_sorted_arrays",
    "starterCode": {
      "python": "def median_of_two_sorted_arrays(*args):\n    # Write your solution here\n    pass",
      "javascript": "function medianOfTwoSortedArrays(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object medianOfTwoSortedArrays(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int medianOfTwoSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums1": [
            1,
            3
          ],
          "nums2": [
            2
          ]
        },
        "expected": 2.0
      },
      {
        "args": {
          "nums1": [
            1,
            2
          ],
          "nums2": [
            3,
            4
          ]
        },
        "expected": 2.5
      },
      {
        "args": {
          "nums1": [
            0,
            0
          ],
          "nums2": [
            0,
            0
          ]
        },
        "expected": 0.0
      }
    ]
  },
  {
    "id": "counting-bits",
    "title": "Counting Bits",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "description": "Given an integer n, return an array of the number of 1 bits in the binary representation of all non-negative integers in the range [0, n]. The function should return an array of length n + 1, where the i-th element is the number of 1 bits in the binary representation of i.",
    "examples": [
      {
        "input": "n = 2",
        "output": "[0,1,1]",
        "explanation": "The binary representation of 0 is 0, 1 is 1, and 2 is 10, so the number of 1 bits in each is 0, 1, and 1 respectively."
      },
      {
        "input": "n = 5",
        "output": "[0,1,1,2,1,2]",
        "explanation": "The binary representation of 0 is 0, 1 is 1, 2 is 10, 3 is 11, 4 is 100, and 5 is 101, so the number of 1 bits in each is 0, 1, 1, 2, 1, and 2 respectively."
      }
    ],
    "constraints": [
      "0 <= n <= 10^5",
      "The input n will always be a non-negative integer."
    ],
    "functionName": "counting_bits",
    "starterCode": {
      "python": "def counting_bits(*args):\n    # Write your solution here\n    pass",
      "javascript": "function countingBits(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object countingBits(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> countingBits(int n) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "n": 2
        },
        "expected": [
          0,
          1,
          1
        ]
      },
      {
        "args": {
          "n": 5
        },
        "expected": [
          0,
          1,
          1,
          2,
          1,
          2
        ]
      },
      {
        "args": {
          "n": 15
        },
        "expected": [
          0,
          1,
          1,
          2,
          1,
          2,
          2,
          1,
          2,
          2
        ]
      }
    ]
  },
  {
    "id": "missing-number",
    "title": "Missing Number",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "description": "Implement the algorithm for **Missing Number**.\n\nThis is a standard DSA question from the 'Bit Manipulation' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "missing_number",
    "starterCode": {
      "python": "def missing_number(*args):\n    # Write your solution here\n    pass",
      "javascript": "function missingNumber(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object missingNumber(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "number-of-1-bits",
    "title": "Number of 1 Bits",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "description": "Implement the algorithm for **Number of 1 Bits**.\n\nThis is a standard DSA question from the 'Bit Manipulation' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "number_of_1_bits",
    "starterCode": {
      "python": "def number_of_1_bits(*args):\n    # Write your solution here\n    pass",
      "javascript": "function numberOf1Bits(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object numberOf1Bits(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "reverse-bits",
    "title": "Reverse Bits",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "description": "Implement the algorithm for **Reverse Bits**.\n\nThis is a standard DSA question from the 'Bit Manipulation' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "reverse_bits",
    "starterCode": {
      "python": "def reverse_bits(*args):\n    # Write your solution here\n    pass",
      "javascript": "function reverseBits(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object reverseBits(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "single-number",
    "title": "Single Number",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "description": "Given a non-empty array of integers, every element appears twice except for one. Find that single one. Your function should have a linear runtime complexity. Could you implement it without using extra memory? The function should return the single number in the array. Note that the input array is guaranteed to have at least one element and at most 3 * 10^4 elements. The input array is guaranteed to have at least one element that appears only once.",
    "examples": [
      {
        "input": "nums = [2,2,1]",
        "output": "1",
        "explanation": "The number 1 appears only once in the array, while the number 2 appears twice."
      },
      {
        "input": "nums = [4,1,2,1,2]",
        "output": "4",
        "explanation": "The number 4 appears only once in the array, while the numbers 1 and 2 appear twice."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "-3 * 10^4 <= nums[i] <= 3 * 10^4",
      "Each element appears twice except for one"
    ],
    "functionName": "single_number",
    "starterCode": {
      "python": "def single_number(*args):\n    # Write your solution here\n    pass",
      "javascript": "function singleNumber(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object singleNumber(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            2,
            2,
            1
          ]
        },
        "expected": 1
      },
      {
        "args": {
          "nums": [
            4,
            1,
            2,
            1,
            2
          ]
        },
        "expected": 4
      },
      {
        "args": {
          "nums": [
            1
          ]
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "reverse-integer",
    "title": "Reverse Integer",
    "difficulty": "Medium",
    "topic": "Bit Manipulation",
    "description": "Given a 32-bit signed integer, reverse the digits of an integer. The function should return 0 when the reversed integer overflows. The input integer is guaranteed to be a 32-bit signed integer. Note that the input integer can be positive, negative, or zero.",
    "examples": [
      {
        "input": "x = 123",
        "output": "321",
        "explanation": "The reversed integer of 123 is 321."
      },
      {
        "input": "x = -123",
        "output": "-321",
        "explanation": "The reversed integer of -123 is -321."
      }
    ],
    "constraints": [
      "-2^31 <= x <= 2^31 - 1",
      "The input integer is a 32-bit signed integer"
    ],
    "functionName": "reverse_integer",
    "starterCode": {
      "python": "def reverse_integer(*args):\n    # Write your solution here\n    pass",
      "javascript": "function reverseInteger(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object reverseInteger(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int reverseInteger(int x) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "x": 123
        },
        "expected": 321
      },
      {
        "args": {
          "x": -123
        },
        "expected": -321
      },
      {
        "args": {
          "x": 120
        },
        "expected": 21
      }
    ]
  },
  {
    "id": "sum-of-two-integers",
    "title": "Sum of Two Integers",
    "difficulty": "Medium",
    "topic": "Bit Manipulation",
    "description": "Given two integers a and b, calculate the sum of a and b without using the + and - operators. The function should return the sum of a and b. Note that the input integers are guaranteed to be 32-bit integers.",
    "examples": [
      {
        "input": "a = 1, b = 2",
        "output": "3",
        "explanation": "The sum of 1 and 2 is 3."
      },
      {
        "input": "a = -2, b = 3",
        "output": "1",
        "explanation": "The sum of -2 and 3 is 1."
      }
    ],
    "constraints": [
      "-2^31 <= a <= 2^31 - 1",
      "-2^31 <= b <= 2^31 - 1"
    ],
    "functionName": "sum_of_two_integers",
    "starterCode": {
      "python": "def sum_of_two_integers(*args):\n    # Write your solution here\n    pass",
      "javascript": "function sumOfTwoIntegers(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object sumOfTwoIntegers(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int sumOfTwoIntegers(int a, int b) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "a": 1,
          "b": 2
        },
        "expected": 3
      },
      {
        "args": {
          "a": -2,
          "b": 3
        },
        "expected": 1
      },
      {
        "args": {
          "a": -1,
          "b": 1
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "clone-graph",
    "title": "Clone Graph",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors. The given node will always be not null and will always be a part of the result graph. The graph is guaranteed to be connected and undirected. The number of nodes in the graph will not exceed 100. The value of each node is between 1 and 100. The undirected graph is represented as a graph where each node is a node object that has a val and a list of its neighbors. The graph only contains nodes with values 1 - 100 and the graph is connected. The graph is undirected, meaning if node A is connected to node B, node B is also connected to node A. The graph is not guaranteed to be connected as a whole, only that the starting node is connected to all other nodes. The graph does not contain cycles. The graph does not contain self-loops, meaning a node cannot be connected to itself. The graph does not contain multiple edges, meaning a node cannot have duplicate neighbors. The graph is guaranteed to be connected, meaning there is a path between every pair of nodes. The graph is guaranteed to be undirected, meaning if there is a path from node A to node B, there is also a path from node B to node A. The graph is guaranteed to be connected and undirected. The number of nodes in the graph will not exceed 100. The value of each node is between 1 and 100. The graph is represented as a list of nodes, where each node is a node object that has a val and a list of its neighbors. The graph only contains nodes with values 1 - 100 and the graph is connected. The graph is undirected, meaning if node A is connected to node B, node B is also connected to node A. The graph does not contain cycles. The graph does not contain self-loops, meaning a node cannot be connected to itself. The graph does not contain multiple edges, meaning a node cannot have duplicate neighbors. The graph is guaranteed to be connected, meaning there is a path between every pair of nodes. The graph is guaranteed to be undirected, meaning if there is a path from node A to node B, there is also a path from node B to node A.",
    "examples": [
      {
        "input": "node1 = Node(1, [Node(2), Node(3)]); node2 = node1.neighbors[0]; node3 = node1.neighbors[1]; node2.neighbors = [node1, Node(4)]; node3.neighbors = [node1, node2]; clone_graph(node1)",
        "output": "Node(1, [Node(2), Node(3)])",
        "explanation": "The graph is represented as a list of nodes, where each node is a node object that has a val and a list of its neighbors. The graph only contains nodes with values 1 - 100 and the graph is connected. The graph is undirected, meaning if node A is connected to node B, node B is also connected to node A."
      },
      {
        "input": "node1 = Node(1, []); clone_graph(node1)",
        "output": "Node(1, [])",
        "explanation": "The graph is represented as a list of nodes, where each node is a node object that has a val and a list of its neighbors. The graph only contains nodes with values 1 - 100 and the graph is connected. The graph is undirected, meaning if node A is connected to node B, node B is also connected to node A."
      },
      {
        "input": "node1 = Node(1, [Node(2)]); node2 = node1.neighbors[0]; node2.neighbors = [node1]; clone_graph(node1)",
        "output": "Node(1, [Node(2)])",
        "explanation": "The graph is represented as a list of nodes, where each node is a node object that has a val and a list of its neighbors. The graph only contains nodes with values 1 - 100 and the graph is connected. The graph is undirected, meaning if node A is connected to node B, node B is also connected to node A."
      }
    ],
    "constraints": [
      "The number of nodes in the graph will not exceed 100.",
      "The value of each node is between 1 and 100.",
      "1 <= Node.val <= 100",
      "Node.val is unique for each node."
    ],
    "functionName": "clone_graph",
    "starterCode": {
      "python": "def clone_graph(*args):\n    # Write your solution here\n    pass",
      "javascript": "function cloneGraph(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object cloneGraph(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "node": {
            "val": 1,
            "neighbors": [
              {
                "val": 2,
                "neighbors": [
                  {
                    "val": 1
                  },
                  {
                    "val": 3
                  }
                ]
              },
              {
                "val": 3,
                "neighbors": [
                  {
                    "val": 1
                  },
                  {
                    "val": 2
                  }
                ]
              }
            ]
          }
        },
        "expected": {
          "val": 1,
          "neighbors": [
            {
              "val": 2,
              "neighbors": [
                {
                  "val": 1
                },
                {
                  "val": 3
                }
              ]
            },
            {
              "val": 3,
              "neighbors": [
                {
                  "val": 1
                },
                {
                  "val": 2
                }
              ]
            }
          ]
        }
      },
      {
        "args": {
          "node": {
            "val": 1,
            "neighbors": []
          }
        },
        "expected": {
          "val": 1,
          "neighbors": []
        }
      },
      {
        "args": {
          "node": {
            "val": 1,
            "neighbors": [
              {
                "val": 2,
                "neighbors": [
                  {
                    "val": 1
                  }
                ]
              }
            ]
          }
        },
        "expected": {
          "val": 1,
          "neighbors": [
            {
              "val": 2,
              "neighbors": [
                {
                  "val": 1
                }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    "id": "course-schedule",
    "title": "Course Schedule",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as course pair [0,1]. Given the number of courses and an array of course pairs, return whether it is possible for you to finish all courses. The course pairs are given in no particular order, and you may assume that there will be no multiple pairs between the same two courses. The course pairs are given as a list of pairs, where each pair is a list of two integers, the first integer representing the course and the second integer representing the prerequisite course. The number of courses will not exceed 10^5. The number of course pairs will not exceed 10^5.",
    "examples": [
      {
        "input": "numCourses = 2; prerequisites = [[1,0]]",
        "output": "true",
        "explanation": "We can take course 0 first and then take course 1."
      },
      {
        "input": "numCourses = 2; prerequisites = [[1,0],[0,1]]",
        "output": "false",
        "explanation": "We cannot take course 0 because we need to take course 1 first, but we cannot take course 1 because we need to take course 0 first."
      },
      {
        "input": "numCourses = 3; prerequisites = [[0,1],[0,2],[1,2]]",
        "output": "true",
        "explanation": "We can take course 0 first, then take course 1, and finally take course 2."
      }
    ],
    "constraints": [
      "1 <= numCourses <= 10^5",
      "0 <= prerequisites.length <= 10^5",
      "prerequisites[i].length == 2",
      "0 <= prerequisites[i][0], prerequisites[i][1] < numCourses"
    ],
    "functionName": "course_schedule",
    "starterCode": {
      "python": "def course_schedule(*args):\n    # Write your solution here\n    pass",
      "javascript": "function courseSchedule(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object courseSchedule(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool courseSchedule(int numCourses, vector<vector<int>>& prerequisites) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "numCourses": 2,
          "prerequisites": [
            [
              1,
              0
            ]
          ]
        },
        "expected": true
      },
      {
        "args": {
          "numCourses": 2,
          "prerequisites": [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        },
        "expected": false
      },
      {
        "args": {
          "numCourses": 3,
          "prerequisites": [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              1,
              2
            ]
          ]
        },
        "expected": true
      }
    ]
  },
  {
    "id": "course-schedule-ii",
    "title": "Course Schedule II",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as course pair [0,1]. Given the number of courses and an array of course pairs, return the ordering of courses you should take to finish all courses. If there is no valid ordering, return an empty array. The course pairs are given in no particular order, and you may assume that there will be no multiple pairs between the same two courses. The course pairs are given as a list of pairs, where each pair is a list of two integers, the first integer representing the course and the second integer representing the prerequisite course. The number of courses will not exceed 10^5. The number of course pairs will not exceed 10^5.",
    "examples": [
      {
        "input": "numCourses = 2; prerequisites = [[1,0]]",
        "output": "[0,1]",
        "explanation": "We can take course 0 first and then take course 1."
      },
      {
        "input": "numCourses = 4; prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,1,2,3]",
        "explanation": "We can take course 0 first, then take course 1, then take course 2, and finally take course 3."
      },
      {
        "input": "numCourses = 2; prerequisites = [[1,0],[0,1]]",
        "output": "[]",
        "explanation": "We cannot take course 0 because we need to take course 1 first, but we cannot take course 1 because we need to take course 0 first."
      }
    ],
    "constraints": [
      "1 <= numCourses <= 10^5",
      "0 <= prerequisites.length <= 10^5",
      "prerequisites[i].length == 2",
      "0 <= prerequisites[i][0], prerequisites[i][1] < numCourses"
    ],
    "functionName": "course_schedule_ii",
    "starterCode": {
      "python": "def course_schedule_ii(*args):\n    # Write your solution here\n    pass",
      "javascript": "function courseScheduleIi(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object courseScheduleIi(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> courseScheduleIi(int numCourses, vector<vector<int>>& prerequisites) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "numCourses": 2,
          "prerequisites": [
            [
              1,
              0
            ]
          ]
        },
        "expected": [
          0,
          1
        ]
      },
      {
        "args": {
          "numCourses": 4,
          "prerequisites": [
            [
              1,
              0
            ],
            [
              2,
              0
            ],
            [
              3,
              1
            ],
            [
              3,
              2
            ]
          ]
        },
        "expected": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "args": {
          "numCourses": 2,
          "prerequisites": [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        },
        "expected": []
      }
    ]
  },
  {
    "id": "graph-valid-tree",
    "title": "Graph Valid Tree",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree. A valid tree is a tree where there is exactly one path between any two nodes. You can assume that no duplicate edges will appear in edges. Since the graph is undirected, [0,1] is the same as [1,0] and thus will not appear together in edges. You can choose any node as the root when you try to construct the tree, and all edges must be used in the construction of the tree. Return true if the given edges make up a valid tree, otherwise return false. The number of nodes is in the range [1, 2000]. The number of edges is in the range [0, 2000].",
    "examples": [
      {
        "input": "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
        "output": "true",
        "explanation": "The given edges make up a valid tree because there is exactly one path between any two nodes."
      },
      {
        "input": "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
        "output": "false",
        "explanation": "The given edges do not make up a valid tree because there are multiple paths between some nodes."
      }
    ],
    "constraints": [
      "1 <= n <= 2000",
      "0 <= edges.length <= 2000",
      "edges[i].length == 2",
      "0 <= edges[i][0], edges[i][1] < n"
    ],
    "functionName": "graph_valid_tree",
    "starterCode": {
      "python": "def graph_valid_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function graphValidTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object graphValidTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool graphValidTree(int n, vector<vector<int>>& edges) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "n": 5,
          "edges": [
            [
              0,
              1
            ],
            [
              0,
              2
            ],
            [
              0,
              3
            ],
            [
              1,
              4
            ]
          ]
        },
        "expected": true
      },
      {
        "args": {
          "n": 5,
          "edges": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              1,
              3
            ],
            [
              1,
              4
            ]
          ]
        },
        "expected": false
      },
      {
        "args": {
          "n": 4,
          "edges": [
            [
              1,
              0
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ]
          ]
        },
        "expected": true
      }
    ]
  },
  {
    "id": "max-area-of-island",
    "title": "Max Area of Island",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "Given a non-empty 2D array grid of 0s and 1s, each 0 represents a water area and each 1 represents a land area. A group of connected 1s (horizontally or vertically) forms an island. The area of an island is the number of 1s in that island. Write a function to return the maximum area of an island in the given 2D array. If there are no islands, return 0. The number of rows in the given grid is in the range [1, 50]. The number of columns in the given grid is in the range [1, 50].",
    "examples": [
      {
        "input": "grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]",
        "output": "6",
        "explanation": "The maximum area of an island in the given grid is 6."
      },
      {
        "input": "grid = [[0,0,0,0,0,0,0,0]]",
        "output": "0",
        "explanation": "There are no islands in the given grid."
      }
    ],
    "constraints": [
      "1 <= grid.length <= 50",
      "1 <= grid[0].length <= 50",
      "grid[i][j] is either 0 or 1"
    ],
    "functionName": "max_area_of_island",
    "starterCode": {
      "python": "def max_area_of_island(*args):\n    # Write your solution here\n    pass",
      "javascript": "function maxAreaOfIsland(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object maxAreaOfIsland(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxAreaOfIsland(vector<vector<int>>& grid) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "grid": [
            [
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0
            ],
            [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              0,
              0,
              0
            ],
            [
              0,
              1,
              1,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            [
              0,
              1,
              0,
              0,
              1,
              1,
              0,
              0,
              1,
              0,
              1,
              0,
              0
            ],
            [
              0,
              1,
              0,
              0,
              1,
              1,
              0,
              0,
              1,
              1,
              1,
              0,
              0
            ],
            [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0
            ],
            [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              0,
              0,
              0
            ],
            [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              0,
              0,
              0,
              0
            ]
          ]
        },
        "expected": 6
      },
      {
        "args": {
          "grid": [
            [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          ]
        },
        "expected": 0
      },
      {
        "args": {
          "grid": [
            [
              1,
              1
            ],
            [
              1,
              1
            ]
          ]
        },
        "expected": 4
      }
    ]
  },
  {
    "id": "number-of-connected-components-in-an-undirected-graph",
    "title": "Number of Connected Components In An Undirected Graph",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph. The number of nodes is in the range [1, 2000]. The number of edges is in the range [0, 2000].",
    "examples": [
      {
        "input": "n = 5, edges = [[0,1],[1,2],[3,4]]",
        "output": "2",
        "explanation": "There are 2 connected components in the given graph."
      },
      {
        "input": "n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]",
        "output": "1",
        "explanation": "There is 1 connected component in the given graph."
      }
    ],
    "constraints": [
      "1 <= n <= 2000",
      "0 <= edges.length <= 2000",
      "edges[i].length == 2",
      "0 <= edges[i][0], edges[i][1] < n"
    ],
    "functionName": "number_of_connected_components_in_an_undirected_graph",
    "starterCode": {
      "python": "def number_of_connected_components_in_an_undirected_graph(*args):\n    # Write your solution here\n    pass",
      "javascript": "function numberOfConnectedComponentsInAnUndirectedGraph(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object numberOfConnectedComponentsInAnUndirectedGraph(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numberOfConnectedComponentsInAnUndirectedGraph(int n, vector<vector<int>>& edges) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "n": 5,
          "edges": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              3,
              4
            ]
          ]
        },
        "expected": 2
      },
      {
        "args": {
          "n": 5,
          "edges": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ]
          ]
        },
        "expected": 1
      },
      {
        "args": {
          "n": 4,
          "edges": [
            [
              1,
              0
            ],
            [
              1,
              2
            ],
            [
              1,
              3
            ]
          ]
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water. The number of islands is the number of connected components in the grid. Return the number of islands in the grid.",
    "examples": [
      {
        "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "explanation": "There is only one island in the grid, which is the entire grid itself."
      },
      {
        "input": "grid = [[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3",
        "explanation": "There are three islands in the grid: the top-left island, the bottom-left island, and the bottom-right island."
      }
    ],
    "constraints": [
      "1 <= grid.length <= 200",
      "1 <= grid[0].length <= 200",
      "grid[i][j] is either '0' or '1'"
    ],
    "functionName": "number_of_islands",
    "starterCode": {
      "python": "def number_of_islands(*args):\n    # Write your solution here\n    pass",
      "javascript": "function numberOfIslands(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object numberOfIslands(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numberOfIslands(vector<vector<char>>& grid) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "grid": [
            [
              "1",
              "1",
              "1",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "1",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "0",
              "0"
            ]
          ]
        },
        "expected": 1
      },
      {
        "args": {
          "grid": [
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "1",
              "1",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "1",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "1",
              "1"
            ]
          ]
        },
        "expected": 3
      },
      {
        "args": {
          "grid": [
            [
              "1",
              "0",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "0",
              "0"
            ],
            [
              "0",
              "0",
              "0",
              "0",
              "0"
            ]
          ]
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "pacific-atlantic-water-flow",
    "title": "Pacific Atlantic Water Flow",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "There are m x n rectangular islands, and each cell in the grid can either be land or water. Each cell in the grid is initially water, but we can make a cell land by adding a height to it. We are given an m x n integer matrix heights representing the height of each cell in the grid. Water can flow from a cell to another if the height of the destination cell is not less than the height of the source cell. We are also given two lists of coordinates: pacific and atlantic. These coordinates represent the cells where the Pacific Ocean and Atlantic Ocean touch the land, respectively. Water can flow from these cells to any other cell in the grid. Return a list of coordinates representing the cells where water can flow to both the Pacific Ocean and the Atlantic Ocean.",
    "examples": [
      {
        "input": "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        "output": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
        "explanation": "Water can flow from the Pacific Ocean to the Atlantic Ocean through the cells at coordinates (0,4), (1,3), (1,4), (2,2), (3,0), (3,1), and (4,0)."
      },
      {
        "input": "heights = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[]",
        "explanation": "There are no cells where water can flow to both the Pacific Ocean and the Atlantic Ocean."
      }
    ],
    "constraints": [
      "m == heights.length",
      "n == heights[i].length",
      "1 <= m, n <= 200",
      "1 <= heights[i][j] <= 2^31 - 1"
    ],
    "functionName": "pacific_atlantic_water_flow",
    "starterCode": {
      "python": "def pacific_atlantic_water_flow(*args):\n    # Write your solution here\n    pass",
      "javascript": "function pacificAtlanticWaterFlow(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object pacificAtlanticWaterFlow(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> pacificAtlanticWaterFlow(vector<vector<int>>& heights) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "heights": [
            [
              1,
              2,
              2,
              3,
              5
            ],
            [
              3,
              2,
              3,
              4,
              4
            ],
            [
              2,
              4,
              5,
              3,
              1
            ],
            [
              6,
              7,
              1,
              4,
              5
            ],
            [
              5,
              1,
              1,
              2,
              4
            ]
          ]
        },
        "expected": [
          [
            0,
            4
          ],
          [
            1,
            3
          ],
          [
            1,
            4
          ],
          [
            2,
            2
          ],
          [
            3,
            0
          ],
          [
            3,
            1
          ],
          [
            4,
            0
          ]
        ]
      },
      {
        "args": {
          "heights": [
            [
              1,
              2,
              3
            ],
            [
              4,
              5,
              6
            ],
            [
              7,
              8,
              9
            ]
          ]
        },
        "expected": []
      },
      {
        "args": {
          "heights": [
            [
              2,
              1
            ],
            [
              1,
              2
            ]
          ]
        },
        "expected": [
          [
            0,
            0
          ],
          [
            0,
            1
          ],
          [
            1,
            0
          ],
          [
            1,
            1
          ]
        ]
      }
    ]
  },
  {
    "id": "redundant-connection",
    "title": "Redundant Connection",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "In this problem, a tree is an undirected graph that is connected and has no cycles. You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has exactly one node in common with the tree. Find the redundant connection in the graph and return it as an array of two integers representing the two nodes connected by the redundant edge.",
    "examples": [
      {
        "input": "edges = [[1,2],[1,3],[2,3]]",
        "output": "[2,3]",
        "explanation": "The redundant connection is between nodes 2 and 3."
      },
      {
        "input": "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
        "output": "[1,4]",
        "explanation": "The redundant connection is between nodes 1 and 4."
      }
    ],
    "constraints": [
      "n == edges.length",
      "1 <= n <= 1000",
      "0 <= edges.length <= n",
      "edges[i].length == 2",
      "1 <= edges[i][0] <= n",
      "1 <= edges[i][1] <= n",
      "edges[i][0] != edges[i][1]"
    ],
    "functionName": "redundant_connection",
    "starterCode": {
      "python": "def redundant_connection(*args):\n    # Write your solution here\n    pass",
      "javascript": "function redundantConnection(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object redundantConnection(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> redundantConnection(vector<vector<int>>& edges) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "edges": [
            [
              1,
              2
            ],
            [
              1,
              3
            ],
            [
              2,
              3
            ]
          ]
        },
        "expected": [
          2,
          3
        ]
      },
      {
        "args": {
          "edges": [
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ],
            [
              1,
              4
            ],
            [
              1,
              5
            ]
          ]
        },
        "expected": [
          1,
          4
        ]
      },
      {
        "args": {
          "edges": [
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              4
            ],
            [
              1,
              4
            ]
          ]
        },
        "expected": [
          1,
          4
        ]
      }
    ]
  },
  {
    "id": "rotting-oranges",
    "title": "Rotting Oranges",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "Implement the algorithm for **Rotting Oranges**.\n\nThis is a standard DSA question from the 'Graphs' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "rotting_oranges",
    "starterCode": {
      "python": "def rotting_oranges(*args):\n    # Write your solution here\n    pass",
      "javascript": "function rottingOranges(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object rottingOranges(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int rottingOranges(string& beginWord, string& endWord, vector<char>& wordList) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "surrounded-regions",
    "title": "Surrounded Regions",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "Implement the algorithm for **Surrounded Regions**.\n\nThis is a standard DSA question from the 'Graphs' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "surrounded_regions",
    "starterCode": {
      "python": "def surrounded_regions(*args):\n    # Write your solution here\n    pass",
      "javascript": "function surroundedRegions(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object surroundedRegions(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "walls-and-gates",
    "title": "Walls And Gates",
    "difficulty": "Medium",
    "topic": "Graphs",
    "description": "Implement the algorithm for **Walls And Gates**.\n\nThis is a standard DSA question from the 'Graphs' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "walls_and_gates",
    "starterCode": {
      "python": "def walls_and_gates(*args):\n    # Write your solution here\n    pass",
      "javascript": "function wallsAndGates(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object wallsAndGates(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "word-ladder",
    "title": "Word Ladder",
    "difficulty": "Hard",
    "topic": "Graphs",
    "description": "Given two words (beginWord and endWord), and a dictionary's word list, find the length of the shortest transformation sequence from beginWord to endWord, such that: Only one letter can be changed at a time. Each transformed word must exist in the dictionary. Note that beginWord is not a transformed word. Return the length of the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists. Also, lower-case English letters are ranged from 'a' to 'z'. There is no restriction on the length of the input words. A word is not the same as another word if they differ in cases or lengths.",
    "examples": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "explanation": "One possible transformation is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\""
      },
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0",
        "explanation": "The endWord \"cog\" is not in wordList."
      }
    ],
    "constraints": [
      "1 <= beginWord.length <= 5",
      "endWord.length == beginWord.length",
      "1 <= wordList.length <= 5000",
      "wordList[i].length == beginWord.length"
    ],
    "functionName": "word_ladder",
    "starterCode": {
      "python": "def word_ladder(*args):\n    # Write your solution here\n    pass",
      "javascript": "function wordLadder(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object wordLadder(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "beginWord": "hit",
          "endWord": "cog",
          "wordList": [
            "hot",
            "dot",
            "dog",
            "lot",
            "log",
            "cog"
          ]
        },
        "expected": 5
      },
      {
        "args": {
          "beginWord": "hit",
          "endWord": "cog",
          "wordList": [
            "hot",
            "dot",
            "dog",
            "lot",
            "log"
          ]
        },
        "expected": 0
      },
      {
        "args": {
          "beginWord": "hit",
          "endWord": "hit",
          "wordList": [
            "hot",
            "dot",
            "dog",
            "lot",
            "log"
          ]
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "gas-station",
    "title": "Gas Station",
    "difficulty": "Medium",
    "topic": "Greedy",
    "description": "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next station (i+1). You begin the journey with an empty tank at one of the gas stations. Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in a clockwise direction, otherwise return -1. If there exists a solution, the answer is guaranteed to be unique.",
    "examples": [
      {
        "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        "output": "3",
        "explanation": "Start at station 3 (index 3) and fill up with 4 unit of gas. Travel to station 4. Then fill up with 5 units of gas. Travel to station 0. Then fill up with 1 unit of gas. Travel to station 1. Then fill up with 2 units of gas. Travel to station 2. Then you circle the circuit of gas stations."
      },
      {
        "input": "gas = [2,3,4], cost = [3,4,3]",
        "output": "-1",
        "explanation": "You can't travel around the circuit once no matter where you start."
      }
    ],
    "constraints": [
      "n == gas.length == cost.length",
      "1 <= n <= 10^4",
      "0 <= gas[i], cost[i] <= 10^4"
    ],
    "functionName": "gas_station",
    "starterCode": {
      "python": "def gas_station(*args):\n    # Write your solution here\n    pass",
      "javascript": "function gasStation(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object gasStation(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int gasStation(vector<int>& gas, vector<int>& cost) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "gas": [
            1,
            2,
            3,
            4,
            5
          ],
          "cost": [
            3,
            4,
            5,
            1,
            2
          ]
        },
        "expected": 3
      },
      {
        "args": {
          "gas": [
            2,
            3,
            4
          ],
          "cost": [
            3,
            4,
            3
          ]
        },
        "expected": -1
      },
      {
        "args": {
          "gas": [
            5,
            1,
            2,
            3,
            4
          ],
          "cost": [
            4,
            4,
            1,
            5,
            1
          ]
        },
        "expected": 4
      }
    ]
  },
  {
    "id": "hand-of-straights",
    "title": "Hand of Straights",
    "difficulty": "Medium",
    "topic": "Greedy",
    "description": "You are given an integer array hand where cards[i] is the type of the ith card. You are also given an integer groupSize, which is the number of cards you have to collect in groups to make a straight. Return true if it is possible to collect the cards in groups to make a straight, otherwise return false.",
    "examples": [
      {
        "input": "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3",
        "output": "true",
        "explanation": "We can make a straight with the cards [1,2,3], [3,4,6], and [7,8]"
      },
      {
        "input": "hand = [1,2,3,4,5], groupSize = 4",
        "output": "false",
        "explanation": "We cannot make a straight with the cards [1,2,3,4,5]"
      }
    ],
    "constraints": [
      "1 <= hand.length <= 10^4",
      "0 <= hand[i] <= 10^9",
      "1 <= groupSize <= hand.length"
    ],
    "functionName": "hand_of_straights",
    "starterCode": {
      "python": "def hand_of_straights(*args):\n    # Write your solution here\n    pass",
      "javascript": "function handOfStraights(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object handOfStraights(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool handOfStraights(vector<int>& hand, int groupSize) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "hand": [
            1,
            2,
            3,
            6,
            2,
            3,
            4,
            7,
            8
          ],
          "groupSize": 3
        },
        "expected": true
      },
      {
        "args": {
          "hand": [
            1,
            2,
            3,
            4,
            5
          ],
          "groupSize": 4
        },
        "expected": false
      },
      {
        "args": {
          "hand": [
            1,
            1,
            1,
            2,
            2,
            2,
            3,
            3,
            3
          ],
          "groupSize": 3
        },
        "expected": true
      }
    ]
  },
  {
    "id": "jump-game",
    "title": "Jump Game",
    "difficulty": "Medium",
    "topic": "Greedy",
    "description": "You are given an integer array nums. You are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index. Return true if you can reach the last index, or false otherwise. You can jump to any position that is within your jump range from your current position.",
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "true",
        "explanation": "We can reach the last index by jumping from index 0 to index 1, then from index 1 to index 4."
      },
      {
        "input": "nums = [3,2,1,0,4]",
        "output": "false",
        "explanation": "We cannot reach the last index because we cannot jump from index 3 to index 4."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "0 <= nums[i] <= 10^5"
    ],
    "functionName": "jump_game",
    "starterCode": {
      "python": "def jump_game(*args):\n    # Write your solution here\n    pass",
      "javascript": "function jumpGame(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object jumpGame(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool jumpGame(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            2,
            3,
            1,
            1,
            4
          ]
        },
        "expected": true
      },
      {
        "args": {
          "nums": [
            3,
            2,
            1,
            0,
            4
          ]
        },
        "expected": false
      },
      {
        "args": {
          "nums": [
            0,
            1
          ]
        },
        "expected": false
      }
    ]
  },
  {
    "id": "jump-game-ii",
    "title": "Jump Game II",
    "difficulty": "Medium",
    "topic": "Greedy",
    "description": "You are given a non-negative integer array nums. You are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps. Return the minimum number of jumps to reach the last index.",
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "2",
        "explanation": "The minimum number of jumps to reach the last index is 2. We can jump from index 0 to index 1, then from index 1 to index 4."
      },
      {
        "input": "nums = [2,3,0,1,4]",
        "output": "2",
        "explanation": "The minimum number of jumps to reach the last index is 2. We can jump from index 0 to index 1, then from index 1 to index 4."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^4",
      "0 <= nums[i] <= 10^5"
    ],
    "functionName": "jump_game_ii",
    "starterCode": {
      "python": "def jump_game_ii(*args):\n    # Write your solution here\n    pass",
      "javascript": "function jumpGameIi(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object jumpGameIi(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int jumpGameIi(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            2,
            3,
            1,
            1,
            4
          ]
        },
        "expected": 2
      },
      {
        "args": {
          "nums": [
            2,
            3,
            0,
            1,
            4
          ]
        },
        "expected": 2
      },
      {
        "args": {
          "nums": [
            0,
            1,
            2,
            3,
            4
          ]
        },
        "expected": 4
      }
    ]
  },
  {
    "id": "max-subarray",
    "title": "Maximum Subarray",
    "difficulty": "Medium",
    "topic": "Greedy",
    "description": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.\n\nThis is the classic Kadane's algorithm problem.",
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "Subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        "input": "nums = [1]",
        "output": "1"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    "functionName": "max_subarray",
    "starterCode": {
      "python": "def max_subarray(nums):\n    # Return the maximum subarray sum\n    pass",
      "javascript": "function maxSubarray(nums) {\n  // Return the maximum subarray sum\n}",
      "java": "class Solution {\n    public int maxSubarray(int[] nums) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxSubarray(vector<int>& nums) {\n        return 0;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            -2,
            1,
            -3,
            4,
            -1,
            2,
            1,
            -5,
            4
          ]
        },
        "expected": 6
      },
      {
        "args": {
          "nums": [
            1
          ]
        },
        "expected": 1
      },
      {
        "args": {
          "nums": [
            5,
            4,
            -1,
            7,
            8
          ]
        },
        "expected": 23
      },
      {
        "args": {
          "nums": [
            -1
          ]
        },
        "expected": -1
      }
    ]
  },
  {
    "id": "merge-triplets-to-form-target-triplet",
    "title": "Merge Triplets to Form Target Triplet",
    "difficulty": "Medium",
    "topic": "Greedy",
    "description": "You are given three arrays of integers, and a target array of three integers. You can merge the three arrays into a single array of three integers, where each integer is the sum of the corresponding integers in the three arrays. Determine if it is possible to merge the three arrays into the target array. Return true if it is possible, or false otherwise.",
    "examples": [
      {
        "input": "triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]",
        "output": "true",
        "explanation": "We can merge the three arrays into the target array by selecting the first element from the first array, the second element from the second array, and the third element from the third array."
      },
      {
        "input": "triplets = [[3,4,5],[4,5,6]], target = [4,5,5]",
        "output": "true",
        "explanation": "We can merge the two arrays into the target array by selecting the first element from the first array, the second element from the second array, and the third element from the first array."
      }
    ],
    "constraints": [
      "1 <= triplets.length <= 10^5",
      "triplets[i].length == 3",
      "1 <= target.length <= 3"
    ],
    "functionName": "merge_triplets_to_form_target_triplet",
    "starterCode": {
      "python": "def merge_triplets_to_form_target_triplet(*args):\n    # Write your solution here\n    pass",
      "javascript": "function mergeTripletsToFormTargetTriplet(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object mergeTripletsToFormTargetTriplet(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool mergeTripletsToFormTargetTriplet(vector<vector<int>>& triplets, vector<int>& target) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "triplets": [
            [
              2,
              5,
              3
            ],
            [
              1,
              8,
              4
            ],
            [
              1,
              7,
              5
            ]
          ],
          "target": [
            2,
            7,
            5
          ]
        },
        "expected": true
      },
      {
        "args": {
          "triplets": [
            [
              3,
              4,
              5
            ],
            [
              4,
              5,
              6
            ]
          ],
          "target": [
            4,
            5,
            5
          ]
        },
        "expected": true
      },
      {
        "args": {
          "triplets": [
            [
              2,
              5,
              3
            ],
            [
              2,
              3,
              4
            ],
            [
              1,
              2,
              5
            ],
            [
              5,
              2,
              3
            ]
          ],
          "target": [
            5,
            5,
            5
          ]
        },
        "expected": false
      }
    ]
  },
  {
    "id": "partition-labels",
    "title": "Partition Labels",
    "difficulty": "Medium",
    "topic": "Greedy",
    "description": "Implement the algorithm for **Partition Labels**.\n\nThis is a standard DSA question from the 'Greedy' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "partition_labels",
    "starterCode": {
      "python": "def partition_labels(*args):\n    # Write your solution here\n    pass",
      "javascript": "function partitionLabels(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object partitionLabels(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int partitionLabels(vector<int>& stones) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "valid-parenthesis-string",
    "title": "Valid Parenthesis String",
    "difficulty": "Medium",
    "topic": "Greedy",
    "description": "Implement the algorithm for **Valid Parenthesis String**.\n\nThis is a standard DSA question from the 'Greedy' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "valid_parenthesis_string",
    "starterCode": {
      "python": "def valid_parenthesis_string(*args):\n    # Write your solution here\n    pass",
      "javascript": "function validParenthesisString(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object validParenthesisString(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "kth-largest-element-in-a-stream",
    "title": "Kth Largest Element In a Stream",
    "difficulty": "Easy",
    "topic": "Heap / Priority Queue",
    "description": "Implement the algorithm for **Kth Largest Element In a Stream**.\n\nThis is a standard DSA question from the 'Heap / Priority Queue' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "kth_largest_element_in_a_stream",
    "starterCode": {
      "python": "def kth_largest_element_in_a_stream(*args):\n    # Write your solution here\n    pass",
      "javascript": "function kthLargestElementInAStream(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object kthLargestElementInAStream(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "last-stone-weight",
    "title": "Last Stone Weight",
    "difficulty": "Easy",
    "topic": "Heap / Priority Queue",
    "description": "We have a collection of stones, each stone has a positive integer weight. Each turn, we choose the two heaviest stones and smash them together. Suppose the two heaviest stones have weights x and y with x <= y. The result of this smash is: If x == y, both stones are totally destroyed; If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y - x. At the end of the game, there is at most 1 stone left. Return the weight of the last stone left, or 0 if there are no stones left.",
    "examples": [
      {
        "input": "stones = [2,7,4,1,8,1]",
        "output": "1",
        "explanation": "We start with stones = [2,7,4,1,8,1]. We take the two heaviest 8 and 7, smash them to get 1, so stones = [2,4,1,1,1]. Then we take 4 and 2, smash them to get 2, so stones = [2,1,1,1]. We take 2 and 1, smash them to get 1, so stones = [1,1,1]. We take 1 and 1, smash them and get 0, so stones = [1]. So we return the last stone weight 1."
      },
      {
        "input": "stones = [1]",
        "output": "1",
        "explanation": "There is only one stone, so we return its weight 1."
      },
      {
        "input": "stones = [1,1]",
        "output": "0",
        "explanation": "We take the two stones, smash them and get 0, so we return 0."
      }
    ],
    "constraints": [
      "1 <= stones.length <= 30",
      "1 <= stones[i] <= 1000",
      "stones.length is even"
    ],
    "functionName": "last_stone_weight",
    "starterCode": {
      "python": "def last_stone_weight(*args):\n    # Write your solution here\n    pass",
      "javascript": "function lastStoneWeight(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object lastStoneWeight(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "stones": [
            2,
            7,
            4,
            1,
            8,
            1
          ]
        },
        "expected": 1
      },
      {
        "args": {
          "stones": [
            1
          ]
        },
        "expected": 1
      },
      {
        "args": {
          "stones": [
            1,
            1
          ]
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "design-twitter",
    "title": "Design Twitter",
    "difficulty": "Medium",
    "topic": "Heap / Priority Queue",
    "description": "Design a simplified version of Twitter where users can post tweets, follow/unfollow other users. You should design and implement three methods: postTweet(userId, tweetId) => Compose a new tweet. getNewsFeed(userId) => Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. follow(followerId, followeeId) => Follower follows a followee. unfollow(followerId, followeeId) => Follower unfollows a followee.",
    "examples": [
      {
        "input": "Twitter twitter = new Twitter(); twitter.postTweet(1, 5); twitter.postTweet(1, 2); twitter.postTweet(2, 1); twitter.postTweet(2, 2); twitter.postTweet(1, 1); twitter.postTweet(2, 1); twitter.postTweet(1, 2); twitter.postTweet(2, 2);",
        "output": "[10,2]",
        "explanation": "User 1 posts tweets with id 5, 2, 1, 2. User 2 posts tweets with id 1, 2, 1, 2. User 1 follows user 2. User 1's news feed is [10, 2] because user 1 posted tweet 10 and user 2 posted tweet 2."
      },
      {
        "input": "Twitter twitter = new Twitter(); twitter.postTweet(1, 5); twitter.postTweet(2, 1); twitter.postTweet(1, 2); twitter.postTweet(2, 2); twitter.postTweet(1, 1); twitter.postTweet(2, 1); twitter.postTweet(1, 2);",
        "output": "[10,2]",
        "explanation": "User 1 posts tweets with id 5, 2, 1, 2. User 2 posts tweets with id 1, 2, 1, 2. User 1 follows user 2. User 1's news feed is [10, 2] because user 1 posted tweet 10 and user 2 posted tweet 2."
      },
      {
        "input": "Twitter twitter = new Twitter(); twitter.postTweet(1, 5); twitter.postTweet(2, 1); twitter.postTweet(1, 2); twitter.postTweet(2, 2); twitter.postTweet(1, 1); twitter.postTweet(2, 1); twitter.postTweet(1, 2); twitter.postTweet(2, 2); twitter.follow(1, 2); twitter.unfollow(1, 2);",
        "output": "[10,2]",
        "explanation": "User 1 posts tweets with id 5, 2, 1, 2. User 2 posts tweets with id 1, 2, 1, 2. User 1 follows user 2 and then unfollows user 2. User 1's news feed is [10, 2] because user 1 posted tweet 10 and user 2 posted tweet 2."
      }
    ],
    "constraints": [
      "1 <= userId <= 10^5",
      "0 <= tweetId <= 10^5",
      "There will be at most 10^4 distinct users and 5000 calls to postTweet, follow, unfollow, and getNewsFeed combined."
    ],
    "functionName": "design_twitter",
    "starterCode": {
      "python": "def design_twitter(*args):\n    # Write your solution here\n    pass",
      "javascript": "function designTwitter(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object designTwitter(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto designTwitter(string& method, int userId, int tweetId) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "method": "postTweet",
          "userId": 1,
          "tweetId": 5
        },
        "expected": null
      },
      {
        "args": {
          "method": "getNewsFeed",
          "userId": 1
        },
        "expected": [
          5
        ]
      },
      {
        "args": {
          "method": "follow",
          "followerId": 1,
          "followeeId": 2
        },
        "expected": null
      }
    ]
  },
  {
    "id": "k-closest-points-to-origin",
    "title": "K Closest Points to Origin",
    "difficulty": "Medium",
    "topic": "Heap / Priority Queue",
    "description": "Given an array of points where points[i] = [xi, yi] represents a point on a 2D plane and an integer k, return the k points that are closest to the origin (0,0). You may return the answer in any order. The distance between one point from the origin is determined by its distance in Euclidean space.",
    "examples": [
      {
        "input": "points = [[1,3],[-2,2]], k = 1",
        "output": "[[-2,2]]",
        "explanation": "The distance from [1,3] to the origin is sqrt(10). The distance from [-2,2] to the origin is sqrt(8). Since sqrt(8) < sqrt(10), return [[-2,2]]."
      },
      {
        "input": "points = [[3,3],[5,-1],[-2,4]], k = 2",
        "output": "[[3,3],[-2,4]]",
        "explanation": "The distance from [3,3] to the origin is sqrt(18). The distance from [5,-1] to the origin is sqrt(26). The distance from [-2,4] to the origin is sqrt(20). Since sqrt(18) < sqrt(20) and sqrt(18) < sqrt(26), return [[3,3],[-2,4]]."
      },
      {
        "input": "points = [[1,3],[5,2],[2,5],[6,9],[4,7]], k = 3",
        "output": "[[1,3],[2,5],[4,7]]",
        "explanation": "The distance from [1,3] to the origin is sqrt(10). The distance from [2,5] to the origin is sqrt(29). The distance from [4,7] to the origin is sqrt(65). The distance from [5,2] to the origin is sqrt(29). The distance from [6,9] to the origin is sqrt(117). Since sqrt(10) < sqrt(29) and sqrt(10) < sqrt(65) and sqrt(10) < sqrt(117), return [[1,3],[2,5],[4,7]]."
      }
    ],
    "constraints": [
      "1 <= k <= points.length <= 10^4",
      "-10^4 < xi, yi < 10^4"
    ],
    "functionName": "k_closest_points_to_origin",
    "starterCode": {
      "python": "def k_closest_points_to_origin(*args):\n    # Write your solution here\n    pass",
      "javascript": "function kClosestPointsToOrigin(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object kClosestPointsToOrigin(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> kClosestPointsToOrigin(vector<vector<int>>& points, int k) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "points": [
            [
              1,
              3
            ],
            [
              -2,
              2
            ]
          ],
          "k": 1
        },
        "expected": [
          [
            -2,
            2
          ]
        ]
      },
      {
        "args": {
          "points": [
            [
              3,
              3
            ],
            [
              5,
              -1
            ],
            [
              -2,
              4
            ]
          ],
          "k": 2
        },
        "expected": [
          [
            3,
            3
          ],
          [
            -2,
            4
          ]
        ]
      },
      {
        "args": {
          "points": [
            [
              1,
              3
            ],
            [
              5,
              2
            ],
            [
              2,
              5
            ],
            [
              6,
              9
            ],
            [
              4,
              7
            ]
          ],
          "k": 3
        },
        "expected": [
          [
            1,
            3
          ],
          [
            2,
            5
          ],
          [
            4,
            7
          ]
        ]
      }
    ]
  },
  {
    "id": "kth-largest-element-in-an-array",
    "title": "Kth Largest Element In An Array",
    "difficulty": "Medium",
    "topic": "Heap / Priority Queue",
    "description": "Implement the algorithm for **Kth Largest Element In An Array**.\n\nThis is a standard DSA question from the 'Heap / Priority Queue' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "kth_largest_element_in_an_array",
    "starterCode": {
      "python": "def kth_largest_element_in_an_array(*args):\n    # Write your solution here\n    pass",
      "javascript": "function kthLargestElementInAnArray(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object kthLargestElementInAnArray(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool kthLargestElementInAnArray(vector<vector<int>>& intervals) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "task-scheduler",
    "title": "Task Scheduler",
    "difficulty": "Medium",
    "topic": "Heap / Priority Queue",
    "description": "Implement the algorithm for **Task Scheduler**.\n\nThis is a standard DSA question from the 'Heap / Priority Queue' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "task_scheduler",
    "starterCode": {
      "python": "def task_scheduler(*args):\n    # Write your solution here\n    pass",
      "javascript": "function taskScheduler(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object taskScheduler(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "find-median-from-data-stream",
    "title": "Find Median From Data Stream",
    "difficulty": "Hard",
    "topic": "Heap / Priority Queue",
    "description": "Implement the algorithm for **Find Median From Data Stream**.\n\nThis is a standard DSA question from the 'Heap / Priority Queue' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "find_median_from_data_stream",
    "starterCode": {
      "python": "def find_median_from_data_stream(*args):\n    # Write your solution here\n    pass",
      "javascript": "function findMedianFromDataStream(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object findMedianFromDataStream(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "meeting-rooms",
    "title": "Meeting Rooms",
    "difficulty": "Easy",
    "topic": "Intervals",
    "description": "Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...](si < ei), determine if a person could attend all meetings. If the person can attend all meetings, return true; otherwise, return false. The intervals are non-overlapping when they have different start or end times. For example, [0,30] and [5,10] are overlapping, while [5,8] and [9,15] are not. The input array is not guaranteed to be sorted.",
    "examples": [
      {
        "input": "intervals = [[0,30],[5,10],[15,20]]",
        "output": "false",
        "explanation": "The person cannot attend all meetings because [0,30] and [5,10] are overlapping."
      },
      {
        "input": "intervals = [[7,10],[2,4]]",
        "output": "true",
        "explanation": "The person can attend all meetings because [7,10] and [2,4] are not overlapping."
      }
    ],
    "constraints": [
      "0 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti < endi <= 10^6"
    ],
    "functionName": "meeting_rooms",
    "starterCode": {
      "python": "def meeting_rooms(*args):\n    # Write your solution here\n    pass",
      "javascript": "function meetingRooms(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object meetingRooms(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "intervals": [
            [
              0,
              30
            ],
            [
              5,
              10
            ],
            [
              15,
              20
            ]
          ]
        },
        "expected": false
      },
      {
        "args": {
          "intervals": [
            [
              7,
              10
            ],
            [
              2,
              4
            ]
          ]
        },
        "expected": true
      },
      {
        "args": {
          "intervals": [
            [
              5,
              8
            ],
            [
              9,
              15
            ]
          ]
        },
        "expected": true
      }
    ]
  },
  {
    "id": "insert-interval",
    "title": "Insert Interval",
    "difficulty": "Medium",
    "topic": "Intervals",
    "description": "Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary). You may assume that the intervals were initially sorted according to their start times. The intervals are non-overlapping when they have different start or end times. For example, [1,3] and [2,6] are overlapping, while [8,10] and [12,16] are not. The input array is guaranteed to be sorted.",
    "examples": [
      {
        "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        "output": "[[1,5],[6,9]]",
        "explanation": "The new interval [2,5] overlaps with [1,3] and [6,9], so we merge them into [1,5] and keep [6,9]."
      },
      {
        "input": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
        "output": "[[1,2],[3,10],[12,16]]",
        "explanation": "The new interval [4,8] overlaps with [3,5] and [6,7] and [8,10], so we merge them into [3,10] and keep [1,2] and [12,16]."
      }
    ],
    "constraints": [
      "0 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti < endi <= 10^6",
      "0 <= newInterval.length == 2"
    ],
    "functionName": "insert_interval",
    "starterCode": {
      "python": "def insert_interval(*args):\n    # Write your solution here\n    pass",
      "javascript": "function insertInterval(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object insertInterval(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> insertInterval(vector<vector<int>>& intervals, vector<int>& newInterval) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "intervals": [
            [
              1,
              3
            ],
            [
              6,
              9
            ]
          ],
          "newInterval": [
            2,
            5
          ]
        },
        "expected": [
          [
            1,
            5
          ],
          [
            6,
            9
          ]
        ]
      },
      {
        "args": {
          "intervals": [
            [
              1,
              2
            ],
            [
              3,
              5
            ],
            [
              6,
              7
            ],
            [
              8,
              10
            ],
            [
              12,
              16
            ]
          ],
          "newInterval": [
            4,
            8
          ]
        },
        "expected": [
          [
            1,
            2
          ],
          [
            3,
            10
          ],
          [
            12,
            16
          ]
        ]
      },
      {
        "args": {
          "intervals": [],
          "newInterval": [
            5,
            7
          ]
        },
        "expected": [
          [
            5,
            7
          ]
        ]
      }
    ]
  },
  {
    "id": "meeting-rooms-ii",
    "title": "Meeting Rooms II",
    "difficulty": "Medium",
    "topic": "Intervals",
    "description": "Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...](si < ei), find the minimum number of conference rooms required. The intervals are non-overlapping when they have different start or end times. For example, [0,30] and [5,10] are overlapping, while [5,8] and [9,15] are not. The input array is not guaranteed to be sorted.",
    "examples": [
      {
        "input": "intervals = [[0,30],[5,10],[15,20]]",
        "output": "2",
        "explanation": "We need two rooms to accommodate all the meetings. One room for [0,30] and another for [5,10]. Then the room for [5,10] can be reused for [15,20]."
      },
      {
        "input": "intervals = [[7,10],[2,4]]",
        "output": "1",
        "explanation": "We only need one room to accommodate all the meetings."
      }
    ],
    "constraints": [
      "0 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti < endi <= 10^6"
    ],
    "functionName": "meeting_rooms_ii",
    "starterCode": {
      "python": "def meeting_rooms_ii(*args):\n    # Write your solution here\n    pass",
      "javascript": "function meetingRoomsIi(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object meetingRoomsIi(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int meetingRoomsIi(vector<vector<int>>& intervals) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "intervals": [
            [
              0,
              30
            ],
            [
              5,
              10
            ],
            [
              15,
              20
            ]
          ]
        },
        "expected": 2
      },
      {
        "args": {
          "intervals": [
            [
              7,
              10
            ],
            [
              2,
              4
            ]
          ]
        },
        "expected": 1
      },
      {
        "args": {
          "intervals": [
            [
              5,
              8
            ],
            [
              9,
              15
            ]
          ]
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "topic": "Intervals",
    "description": "Implement the algorithm for **Merge Intervals**.\n\nThis is a standard DSA question from the 'Intervals' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "merge_intervals",
    "starterCode": {
      "python": "def merge_intervals(*args):\n    # Write your solution here\n    pass",
      "javascript": "function mergeIntervals(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object mergeIntervals(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "non-overlapping-intervals",
    "title": "Non Overlapping Intervals",
    "difficulty": "Medium",
    "topic": "Intervals",
    "description": "Implement the algorithm for **Non Overlapping Intervals**.\n\nThis is a standard DSA question from the 'Intervals' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "non_overlapping_intervals",
    "starterCode": {
      "python": "def non_overlapping_intervals(*args):\n    # Write your solution here\n    pass",
      "javascript": "function nonOverlappingIntervals(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object nonOverlappingIntervals(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "minimum-interval-to-include-each-query",
    "title": "Minimum Interval to Include Each Query",
    "difficulty": "Hard",
    "topic": "Intervals",
    "description": "Implement the algorithm for **Minimum Interval to Include Each Query**.\n\nThis is a standard DSA question from the 'Intervals' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "minimum_interval_to_include_each_query",
    "starterCode": {
      "python": "def minimum_interval_to_include_each_query(*args):\n    # Write your solution here\n    pass",
      "javascript": "function minimumIntervalToIncludeEachQuery(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object minimumIntervalToIncludeEachQuery(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "linked-list-cycle",
    "title": "Linked List Cycle",
    "difficulty": "Easy",
    "topic": "Linked List",
    "description": "Given head, the head of a linked list, determine if the linked list has a cycle in it.\n\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.\n\nReturn true if there is a cycle in the linked list. Otherwise, return false.",
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true",
        "explanation": "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)."
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "true",
        "explanation": "There is a cycle in the linked list, where the tail connects to the 0th node."
      }
    ],
    "constraints": [
      "The number of the nodes in the list is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5",
      "pos is -1 or a valid index in the linked-list."
    ],
    "functionName": "has_cycle",
    "starterCode": {
      "python": "def has_cycle(head):\n    # Write your solution here\n    pass",
      "javascript": "function hasCycle(head) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public boolean hasCycle(ListNode head) {\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        return false;\n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "merge-two-sorted-lists",
    "title": "Merge Two Sorted Lists",
    "difficulty": "Easy",
    "topic": "Linked List",
    "description": "You are given the heads of two sorted linked lists list1 and list2.\n\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\n\nReturn the head of the merged linked list.",
    "examples": [
      {
        "input": "list1 = [1,2,4], list2 = [1,3,4]",
        "output": "[1,1,2,3,4,4]",
        "explanation": "The two lists are merged in sorted order."
      }
    ],
    "constraints": [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both list1 and list2 are sorted in non-decreasing order."
    ],
    "functionName": "merge_two_lists",
    "starterCode": {
      "python": "def merge_two_lists(list1, list2):\n    # Write your solution here\n    pass",
      "javascript": "function mergeTwoLists(list1, list2) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        return nullptr;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "list1": { "function_name": "ListNode", "args": [[1, 2, 4]] },
          "list2": { "function_name": "ListNode", "args": [[1, 3, 4]] }
        },
        "expected": { "function_name": "ListNode", "args": [[1, 1, 2, 3, 4, 4]] }
      }
    ]
  },
  {
    "id": "reverse-linked-list",
    "title": "Reverse Linked List",
    "difficulty": "Easy",
    "topic": "Linked List",
    "description": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    "examples": [
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "explanation": "The list is reversed."
      },
      {
        "input": "head = [1,2]",
        "output": "[2,1]",
        "explanation": "The list is reversed."
      }
    ],
    "constraints": [
      "The number of nodes in the list is the range [0, 5000].",
      "-5000 <= Node.val <= 5000"
    ],
    "functionName": "reverse_list",
    "starterCode": {
      "python": "def reverse_list(head):\n    # Write your solution here\n    pass",
      "javascript": "function reverseList(head) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public ListNode reverseList(ListNode head) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        return nullptr;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "head": { "function_name": "ListNode", "args": [[1, 2, 3, 4, 5]] }
        },
        "expected": { "function_name": "ListNode", "args": [[5, 4, 3, 2, 1]] }
      },
      {
        "args": {
          "head": { "function_name": "ListNode", "args": [[1, 2]] }
        },
        "expected": { "function_name": "ListNode", "args": [[2, 1]] }
      }
    ]
  },
  {
    "id": "add-two-numbers",
    "title": "Add Two Numbers",
    "difficulty": "Medium",
    "topic": "Linked List",
    "description": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. The sum of two numbers should not have any leading zeros. The function should return the head of the resulting linked list.",
    "examples": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "explanation": "The sum of 342 and 465 is 807."
      },
      {
        "input": "l1 = [0], l2 = [0]",
        "output": "[0]",
        "explanation": "The sum of 0 and 0 is 0."
      }
    ],
    "constraints": [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9.",
      "It is guaranteed that the list represents a non-negative integer.",
      "The digits are stored in reverse order."
    ],
    "functionName": "add_two_numbers",
    "starterCode": {
      "python": "def add_two_numbers(*args):\n    # Write your solution here\n    pass",
      "javascript": "function addTwoNumbers(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object addTwoNumbers(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "l1": {
            "function_name": "ListNode",
            "args": [
              [
                2,
                4,
                3
              ]
            ]
          },
          "l2": {
            "function_name": "ListNode",
            "args": [
              [
                5,
                6,
                4
              ]
            ]
          }
        },
        "expected": {
          "function_name": "ListNode",
          "args": [
            [
              7,
              0,
              8
            ]
          ]
        }
      },
      {
        "args": {
          "l1": {
            "function_name": "ListNode",
            "args": [
              [
                0
              ]
            ]
          },
          "l2": {
            "function_name": "ListNode",
            "args": [
              [
                0
              ]
            ]
          }
        },
        "expected": {
          "function_name": "ListNode",
          "args": [
            [
              0
            ]
          ]
        }
      },
      {
        "args": {
          "l1": {
            "function_name": "ListNode",
            "args": [
              [
                9,
                9,
                9,
                9,
                9,
                9,
                9
              ]
            ],
            "kwargs": {}
          },
          "l2": {
            "function_name": "ListNode",
            "args": [
              [
                9,
                9,
                9,
                9
              ]
            ]
          }
        },
        "expected": {
          "function_name": "ListNode",
          "args": [
            [
              8,
              9,
              9,
              9,
              0,
              0,
              0,
              1
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "copy-list-with-random-pointer",
    "title": "Copy List With Random Pointer",
    "difficulty": "Medium",
    "topic": "Linked List",
    "description": "A linked list of n nodes is given such that each node contains an additional random pointer which points to any node in the list or null. Create a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the list, the next pointers, and the random pointers are the same as in the original list.",
    "examples": [
      {
        "input": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "explanation": "The original linked list is [[7,null],[13,0],[11,4],[10,2],[1,0]]. For each node, we create a new node with the same value and copy the next and random pointers."
      },
      {
        "input": "[[1,1],[2,1]]",
        "output": "[[1,1],[2,1]]",
        "explanation": "The original linked list is [[1,1],[2,1]]. For each node, we create a new node with the same value and copy the next and random pointers."
      }
    ],
    "constraints": [
      "0 <= n <= 1000.",
      "The values of the nodes are between 1 and 10000.",
      "Node.random is null or is pointing to some node in the list."
    ],
    "functionName": "copy_list_with_random_pointer",
    "starterCode": {
      "python": "def copy_list_with_random_pointer(*args):\n    # Write your solution here\n    pass",
      "javascript": "function copyListWithRandomPointer(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object copyListWithRandomPointer(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "head": {
            "function_name": "Node",
            "args": [
              [
                7,
                null
              ],
              [
                13,
                0
              ],
              [
                11,
                4
              ],
              [
                10,
                2
              ],
              [
                1,
                0
              ]
            ]
          }
        },
        "expected": {
          "function_name": "Node",
          "args": [
            [
              7,
              null
            ],
            [
              13,
              0
            ],
            [
              11,
              4
            ],
            [
              10,
              2
            ],
            [
              1,
              0
            ]
          ]
        }
      },
      {
        "args": {
          "head": {
            "function_name": "Node",
            "args": [
              [
                1,
                1
              ],
              [
                2,
                1
              ]
            ]
          }
        },
        "expected": {
          "function_name": "Node",
          "args": [
            [
              1,
              1
            ],
            [
              2,
              1
            ]
          ]
        }
      },
      {
        "args": {
          "head": {
            "function_name": "Node",
            "args": [
              [
                3,
                null
              ],
              [
                3,
                0
              ],
              [
                3,
                null
              ]
            ]
          }
        },
        "expected": {
          "function_name": "Node",
          "args": [
            [
              3,
              null
            ],
            [
              3,
              0
            ],
            [
              3,
              null
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "find-the-duplicate-number",
    "title": "Find The Duplicate Number",
    "difficulty": "Medium",
    "topic": "Linked List",
    "description": "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one duplicate number in nums, return this duplicate number. It is guaranteed that there is only one duplicate number in nums and that the duplicate number must exist in the range [1, n] where n is the length of the array.",
    "examples": [
      {
        "input": "nums = [1,3,4,2,2]",
        "output": "2",
        "explanation": "There are n = 5 numbers, and each is in the range [1, 5]. The duplicate number is 2."
      },
      {
        "input": "nums = [3,1,3,4,2]",
        "output": "3",
        "explanation": "There are n = 5 numbers, and each is in the range [1, 5]. The duplicate number is 3."
      }
    ],
    "constraints": [
      "1 <= n <= 10^5.",
      "n + 1 <= nums.length <= 3 * 10^4.",
      "1 <= nums[i] <= n.",
      "There is only one duplicate number in nums, it is guaranteed that the duplicate number must exist in the range [1, n]."
    ],
    "functionName": "find_the_duplicate_number",
    "starterCode": {
      "python": "def find_the_duplicate_number(*args):\n    # Write your solution here\n    pass",
      "javascript": "function findTheDuplicateNumber(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object findTheDuplicateNumber(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findTheDuplicateNumber(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            1,
            3,
            4,
            2,
            2
          ]
        },
        "expected": 2
      },
      {
        "args": {
          "nums": [
            3,
            1,
            3,
            4,
            2
          ]
        },
        "expected": 3
      },
      {
        "args": {
          "nums": [
            1,
            1
          ]
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "lru-cache",
    "title": "LRU Cache",
    "difficulty": "Medium",
    "topic": "Linked List",
    "description": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class: LRUCache(int capacity) Initialize the LRU cache with positive size capacity. int get(int key) Return the value of the key if the key exists, otherwise return -1. void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity, evict the least recently used key-function. The functions get and put must each run in O(1) average time complexity.",
    "examples": [
      {
        "input": "LRUCache cache = new LRUCache(2); cache.put(1, 1); cache.put(2, 2); cache.get(1); cache.put(3, 3); cache.get(2); cache.put(4, 4); cache.get(1); cache.get(3); cache.get(4);",
        "output": "[1,-1,-1,1]",
        "explanation": "The LRU cache is initialized with a capacity of 2. The key-value pairs are added and retrieved as specified, with the least recently used key evicted when the capacity is exceeded."
      },
      {
        "input": "LRUCache cache = new LRUCache(1); cache.put(2, 1); cache.get(2); cache.put(3, 2); cache.get(2); cache.get(3);",
        "output": "[1,-1,2]",
        "explanation": "The LRU cache is initialized with a capacity of 1. The key-value pairs are added and retrieved as specified, with the least recently used key evicted when the capacity is exceeded."
      }
    ],
    "constraints": [
      "1 <= capacity <= 1000",
      "0 <= key <= 1000",
      "0 <= value <= 1000",
      "At most 3000 operations will be performed."
    ],
    "functionName": "lru_cache",
    "starterCode": {
      "python": "def lru_cache(*args):\n    # Write your solution here\n    pass",
      "javascript": "function lruCache(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object lruCache(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> lruCache(int capacity, vector<vector<char>>& operations) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "capacity": 2,
          "operations": [
            [
              "put",
              1,
              1
            ],
            [
              "put",
              2,
              2
            ],
            [
              "get",
              1
            ],
            [
              "put",
              3,
              3
            ],
            [
              "get",
              2
            ],
            [
              "put",
              4,
              4
            ],
            [
              "get",
              1
            ],
            [
              "get",
              3
            ],
            [
              "get",
              4
            ]
          ]
        },
        "expected": [
          null,
          null,
          1,
          null,
          -1,
          null,
          -1,
          3,
          4
        ]
      },
      {
        "args": {
          "capacity": 1,
          "operations": [
            [
              "put",
              2,
              1
            ],
            [
              "get",
              2
            ],
            [
              "put",
              3,
              2
            ],
            [
              "get",
              2
            ],
            [
              "get",
              3
            ]
          ]
        },
        "expected": [
          null,
          1,
          null,
          -1,
          2
        ]
      },
      {
        "args": {
          "capacity": 10,
          "operations": [
            [
              "put",
              10,
              13
            ],
            [
              "put",
              3,
              17
            ],
            [
              "get",
              6
            ],
            [
              "put",
              6,
              11
            ],
            [
              "get",
              10
            ],
            [
              "put",
              13,
              7
            ],
            [
              "put",
              8,
              3
            ],
            [
              "put",
              9,
              10
            ],
            [
              "get",
              13
            ],
            [
              "put",
              4,
              5
            ],
            [
              "get",
              11
            ],
            [
              "put",
              9,
              8
            ]
          ]
        },
        "expected": [
          null,
          null,
          -1,
          null,
          -1,
          null,
          null,
          null,
          7,
          null,
          -1,
          null
        ]
      }
    ]
  },
  {
    "id": "remove-nth-node-from-end-of-list",
    "title": "Remove Nth Node From End of List",
    "difficulty": "Medium",
    "topic": "Linked List",
    "description": "Given the head of a linked list, remove the nth node from the end of the list and return its head. The number of nodes in the list is sz. 1 <= sz <= 30, 0 <= Node.val <= 100, 1 <= n <= sz. You may assume the list is non-empty and the given node is not null.",
    "examples": [
      {
        "input": "head = [1,2,3,4,5], n = 2",
        "output": "[1,2,3,5]",
        "explanation": "The second node from the end is removed, resulting in the list [1,2,3,5]."
      },
      {
        "input": "head = [1], n = 1",
        "output": "[]",
        "explanation": "The only node in the list is removed, resulting in an empty list."
      }
    ],
    "constraints": [
      "The number of nodes in the list is sz.",
      "1 <= sz <= 30",
      "0 <= Node.val <= 100",
      "1 <= n <= sz"
    ],
    "functionName": "remove_nth_node_from_end_of_list",
    "starterCode": {
      "python": "def remove_nth_node_from_end_of_list(*args):\n    # Write your solution here\n    pass",
      "javascript": "function removeNthNodeFromEndOfList(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object removeNthNodeFromEndOfList(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> removeNthNodeFromEndOfList(vector<int>& head, int n) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ],
          "n": 2
        },
        "expected": [
          1,
          2,
          3,
          5
        ]
      },
      {
        "args": {
          "head": [
            1
          ],
          "n": 1
        },
        "expected": []
      },
      {
        "args": {
          "head": [
            1,
            2
          ],
          "n": 1
        },
        "expected": [
          1
        ]
      }
    ]
  },
  {
    "id": "reorder-list",
    "title": "Reorder List",
    "difficulty": "Medium",
    "topic": "Linked List",
    "description": "Given the head of a singly linked-list, reorder it to be 1-L-N-2-L-N-1. You may not modify the values in the list's nodes, only nodes themselves can be changed. The number of nodes in the list is sz. 1 <= sz <= 200, sz is even. You may assume the list is non-empty and the given node is not null.",
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[1,4,2,3]",
        "explanation": "The list is reordered to be 1-L-N-2-L-N-1, resulting in the list [1,4,2,3]."
      },
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[1,5,2,4,3]",
        "explanation": "The list is reordered to be 1-L-N-2-L-N-1, resulting in the list [1,5,2,4,3]."
      }
    ],
    "constraints": [
      "The number of nodes in the list is sz.",
      "1 <= sz <= 200",
      "sz is even"
    ],
    "functionName": "reorder_list",
    "starterCode": {
      "python": "def reorder_list(*args):\n    # Write your solution here\n    pass",
      "javascript": "function reorderList(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object reorderList(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> reorderList(vector<int>& head) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "head": [
            1,
            2,
            3,
            4
          ]
        },
        "expected": [
          1,
          4,
          2,
          3
        ]
      },
      {
        "args": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ]
        },
        "expected": [
          1,
          5,
          2,
          4,
          3
        ]
      },
      {
        "args": {
          "head": [
            1,
            2,
            3,
            4,
            5,
            6
          ]
        },
        "expected": [
          1,
          6,
          2,
          5,
          3,
          4
        ]
      }
    ]
  },
  {
    "id": "merge-k-sorted-lists",
    "title": "Merge K Sorted Lists",
    "difficulty": "Hard",
    "topic": "Linked List",
    "description": "You are given an array of k linked-lists lists, where each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it. The problem can be solved using a min-heap data structure to keep track of the smallest node among all the linked-lists. The time complexity of this solution is O(N log k), where N is the total number of nodes and k is the number of linked-lists. The space complexity is O(k), which is used to store the nodes in the min-heap.",
    "examples": [
      {
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]",
        "explanation": "The output is the merged linked-list, which is sorted in ascending order."
      },
      {
        "input": "lists = []",
        "output": "[]",
        "explanation": "If the input is an empty list, the output is also an empty list."
      },
      {
        "input": "lists = [[]]",
        "output": "[]",
        "explanation": "If the input is a list containing an empty linked-list, the output is also an empty list."
      }
    ],
    "constraints": [
      "k == lists.length",
      "0 <= lists.length <= 10^4",
      "0 <= lists[i].length <= 10^4",
      "-10^4 <= lists[i].val <= 10^4"
    ],
    "functionName": "merge_k_sorted_lists",
    "starterCode": {
      "python": "def merge_k_sorted_lists(*args):\n    # Write your solution here\n    pass",
      "javascript": "function mergeKSortedLists(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object mergeKSortedLists(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> mergeKSortedLists(vector<vector<int>>& lists) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "lists": [
            [
              1,
              4,
              5
            ],
            [
              1,
              3,
              4
            ],
            [
              2,
              6
            ]
          ]
        },
        "expected": [
          1,
          1,
          2,
          3,
          4,
          4,
          5,
          6
        ]
      },
      {
        "args": {
          "lists": []
        },
        "expected": []
      },
      {
        "args": {
          "lists": [
            []
          ]
        },
        "expected": []
      }
    ]
  },
  {
    "id": "reverse-nodes-in-k-group",
    "title": "Reverse Nodes In K Group",
    "difficulty": "Hard",
    "topic": "Linked List",
    "description": "Given the head of a linked list, reverse the nodes of the list k at a time and return the modified list. k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is. The problem can be solved using a recursive approach to reverse the linked-list k nodes at a time. The time complexity of this solution is O(N), where N is the number of nodes in the linked-list. The space complexity is O(1), which is used to store the recursive call stack.",
    "examples": [
      {
        "input": "head = [1,2,3,4,5], k = 2",
        "output": "[2,1,4,3,5]",
        "explanation": "The output is the modified linked-list, where every k nodes are reversed."
      },
      {
        "input": "head = [1,2,3,4,5], k = 3",
        "output": "[3,2,1,4,5]",
        "explanation": "The output is the modified linked-list, where every k nodes are reversed."
      },
      {
        "input": "head = [1,2,3,4,5], k = 1",
        "output": "[1,2,3,4,5]",
        "explanation": "If k is 1, the linked-list remains the same."
      }
    ],
    "constraints": [
      "The number of nodes in the list is in the range [1, 5 * 10^4].",
      "1 <= k <= 10^4",
      "0 <= Node.val <= 10^4"
    ],
    "functionName": "reverse_nodes_in_k_group",
    "starterCode": {
      "python": "def reverse_nodes_in_k_group(*args):\n    # Write your solution here\n    pass",
      "javascript": "function reverseNodesInKGroup(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object reverseNodesInKGroup(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> reverseNodesInKGroup(vector<int>& head, int k) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ],
          "k": 2
        },
        "expected": [
          2,
          1,
          4,
          3,
          5
        ]
      },
      {
        "args": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ],
          "k": 3
        },
        "expected": [
          3,
          2,
          1,
          4,
          5
        ]
      },
      {
        "args": {
          "head": [
            1,
            2,
            3,
            4,
            5
          ],
          "k": 1
        },
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      }
    ]
  },
  {
    "id": "happy-number",
    "title": "Happy Number",
    "difficulty": "Easy",
    "topic": "Math & Geometry",
    "description": "A happy number is defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers. The problem can be solved using a hash set to keep track of the numbers that have been seen so far. The time complexity of this solution is O(log n), where n is the input number. The space complexity is O(log n), which is used to store the numbers in the hash set.",
    "examples": [
      {
        "input": "n = 19",
        "output": "true",
        "explanation": "The output is true because 19 is a happy number."
      },
      {
        "input": "n = 20",
        "output": "false",
        "explanation": "The output is false because 20 is not a happy number."
      },
      {
        "input": "n = 1",
        "output": "true",
        "explanation": "The output is true because 1 is a happy number."
      }
    ],
    "constraints": [
      "0 <= n <= 2^31 - 1",
      "The number of digits in n is less than or equal to 10^5"
    ],
    "functionName": "happy_number",
    "starterCode": {
      "python": "def happy_number(*args):\n    # Write your solution here\n    pass",
      "javascript": "function happyNumber(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object happyNumber(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool happyNumber(int n) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "n": 19
        },
        "expected": true
      },
      {
        "args": {
          "n": 20
        },
        "expected": false
      },
      {
        "args": {
          "n": 1
        },
        "expected": true
      }
    ]
  },
  {
    "id": "plus-one",
    "title": "Plus One",
    "difficulty": "Easy",
    "topic": "Math & Geometry",
    "description": "Given a non-empty array of digits representing a non-negative integer, plus one to the integer. The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit. You may assume the integer does not contain any leading zero, except the number 0 itself. The array is modified in-place, and you may assume the input array has at least one element. Return the array after plus one. For example, if the input is [1,2,3], the output should be [1,2,4]. If the input is [4,3,2,1], the output should be [4,3,2,2]. If the input is [9], the output should be [1,0].",
    "examples": [
      {
        "input": "digits = [1,2,3]",
        "output": "[1,2,4]",
        "explanation": "The array represents the integer 123. Incrementing by one gives 124."
      },
      {
        "input": "digits = [4,3,2,1]",
        "output": "[4,3,2,2]",
        "explanation": "The array represents the integer 4321. Incrementing by one gives 4322."
      },
      {
        "input": "digits = [9]",
        "output": "[1,0]",
        "explanation": "The array represents the integer 9. Incrementing by one gives 10."
      }
    ],
    "constraints": [
      "1 <= digits.length <= 100",
      "0 <= digits[i] <= 9",
      "digits does not contain any leading zero, except the number 0 itself."
    ],
    "functionName": "plus_one",
    "starterCode": {
      "python": "def plus_one(*args):\n    # Write your solution here\n    pass",
      "javascript": "function plusOne(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object plusOne(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> plusOne(vector<int>& digits) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "digits": [
            1,
            2,
            3
          ]
        },
        "expected": [
          1,
          2,
          4
        ]
      },
      {
        "args": {
          "digits": [
            4,
            3,
            2,
            1
          ]
        },
        "expected": [
          4,
          3,
          2,
          2
        ]
      },
      {
        "args": {
          "digits": [
            9
          ]
        },
        "expected": [
          1,
          0
        ]
      }
    ]
  },
  {
    "id": "detect-squares",
    "title": "Detect Squares",
    "difficulty": "Medium",
    "topic": "Math & Geometry",
    "description": "You are given an array of points where points[i] = [xi, yi] is the ith point on a 2D plane. Return the number of squares that can be formed by using these points. A square with points [xi, yi], [xi, yi + d], [xi + d, yi], and [xi + d, yi + d] can be formed if there are points at all these four locations. The length of a side of the square will be the distance between two adjacent points. For example, if the input is [[1,1],[0,1],[1,0],[0,0],[2,2],[0,2],[2,0],[2,1],[1,2],[0,0],[0,2],[2,0],[1,1]], the output should be 2.",
    "examples": [
      {
        "input": "points = [[1,1],[0,1],[1,0],[0,0],[2,2],[0,2],[2,0],[2,1],[1,2],[0,0],[0,2],[2,0],[1,1]]",
        "output": "2",
        "explanation": "Two squares can be formed: one with points [1,1], [0,1], [1,0], [0,0] and another with points [1,1], [2,1], [1,2], [2,2]."
      },
      {
        "input": "points = [[3,1],[1,1],[0,1],[2,1],[3,3],[3,2],[0,2],[2,3]]",
        "output": "2",
        "explanation": "Two squares can be formed: one with points [3,1], [3,2], [0,1], [0,2] and another with points [1,1], [1,3], [3,1], [3,3]."
      },
      {
        "input": "points = [[0,0],[1,1],[1,0],[0,1]]",
        "output": "1",
        "explanation": "One square can be formed: one with points [0,0], [0,1], [1,0], [1,1]."
      }
    ],
    "constraints": [
      "1 <= points.length <= 5 * 10^4",
      "points[i].length == 2",
      "0 <= xi, yi <= 2^31 - 1"
    ],
    "functionName": "detect_squares",
    "starterCode": {
      "python": "def detect_squares(*args):\n    # Write your solution here\n    pass",
      "javascript": "function detectSquares(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object detectSquares(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int detectSquares(vector<vector<int>>& points) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "points": [
            [
              1,
              1
            ],
            [
              0,
              1
            ],
            [
              1,
              0
            ],
            [
              0,
              0
            ],
            [
              2,
              2
            ],
            [
              0,
              2
            ],
            [
              2,
              0
            ],
            [
              2,
              1
            ],
            [
              1,
              2
            ],
            [
              0,
              0
            ],
            [
              0,
              2
            ],
            [
              2,
              0
            ],
            [
              1,
              1
            ]
          ]
        },
        "expected": 2
      },
      {
        "args": {
          "points": [
            [
              3,
              1
            ],
            [
              1,
              1
            ],
            [
              0,
              1
            ],
            [
              2,
              1
            ],
            [
              3,
              3
            ],
            [
              3,
              2
            ],
            [
              0,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "expected": 2
      },
      {
        "args": {
          "points": [
            [
              0,
              0
            ],
            [
              1,
              1
            ],
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ]
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "multiply-strings",
    "title": "Multiply Strings",
    "difficulty": "Medium",
    "topic": "Math & Geometry",
    "description": "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string. The length of both num1 and num2 is less than 110. The integers do not contain any leading zero, except the number 0 itself. The product of any two non-negative integers is guaranteed to fit in a 32-bit signed integer. For example, if the input is num1 = '123', num2 = '456', the output should be '56088'. If the input is num1 = '0', num2 = '0', the output should be '0'.",
    "examples": [
      {
        "input": "num1 = '123', num2 = '456'",
        "output": "'56088'",
        "explanation": "The product of 123 and 456 is 56088."
      },
      {
        "input": "num1 = '0', num2 = '0'",
        "output": "'0'",
        "explanation": "The product of 0 and 0 is 0."
      },
      {
        "input": "num1 = '9', num2 = '9'",
        "output": "'81'",
        "explanation": "The product of 9 and 9 is 81."
      }
    ],
    "constraints": [
      "1 <= num1.length, num2.length <= 110",
      "num1 and num2 consist of only digits.",
      "num1 and num2 do not contain any leading zero, except the number 0 itself."
    ],
    "functionName": "multiply_strings",
    "starterCode": {
      "python": "def multiply_strings(*args):\n    # Write your solution here\n    pass",
      "javascript": "function multiplyStrings(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object multiplyStrings(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string multiplyStrings(string& num1, string& num2) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "num1": "123",
          "num2": "456"
        },
        "expected": "56088"
      },
      {
        "args": {
          "num1": "0",
          "num2": "0"
        },
        "expected": "0"
      },
      {
        "args": {
          "num1": "9",
          "num2": "9"
        },
        "expected": "81"
      }
    ]
  },
  {
    "id": "powx-n",
    "title": "Pow(x, n)",
    "difficulty": "Medium",
    "topic": "Math & Geometry",
    "description": "Implement pow(x, n), which calculates x raised to the power of n (i.e., x^n). The function should return the result of x raised to the power of n. Note that n can be negative, in which case the function should return the reciprocal of x raised to the power of the absolute value of n. The function should handle the case where x is 0 and n is negative, in which case it should return 0. The function should also handle the case where x is 0 and n is 0, in which case it should return 1.",
    "examples": [
      {
        "input": "x = 2.0, n = 3",
        "output": "8.0",
        "explanation": "2.0^3 = 8.0"
      },
      {
        "input": "x = 2.1, n = 3",
        "output": "9.261",
        "explanation": "2.1^3 = 9.261"
      }
    ],
    "constraints": [
      "-100.0 < x < 100.0",
      "-2^31 <= n <= 2^31-1",
      "-10^4 <= x^n <= 10^4"
    ],
    "functionName": "pow(x,_n)",
    "starterCode": {
      "python": "def pow(x,_n)(*args):\n    # Write your solution here\n    pass",
      "javascript": "function pow(x,N)(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object pow(x,N)(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int pow(x,N)(int x, int n) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "x": 2.0,
          "n": 3
        },
        "expected": 8.0
      },
      {
        "args": {
          "x": 2.1,
          "n": 3
        },
        "expected": 9.261
      },
      {
        "args": {
          "x": 2.0,
          "n": -3
        },
        "expected": 0.125
      }
    ]
  },
  {
    "id": "rotate-image",
    "title": "Rotate Image",
    "difficulty": "Medium",
    "topic": "Math & Geometry",
    "description": "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). The function should return the rotated image. Note that the input matrix will always be a square matrix, and the number of rows and columns will always be the same.",
    "examples": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]",
        "explanation": "Rotating the matrix by 90 degrees clockwise results in the given output"
      },
      {
        "input": "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
        "explanation": "Rotating the matrix by 90 degrees clockwise results in the given output"
      }
    ],
    "constraints": [
      "n == matrix.length == matrix[i].length",
      "1 <= n <= 20",
      "-1000 <= matrix[i][j] <= 1000"
    ],
    "functionName": "rotate_image",
    "starterCode": {
      "python": "def rotate_image(*args):\n    # Write your solution here\n    pass",
      "javascript": "function rotateImage(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object rotateImage(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> rotateImage(vector<vector<int>>& matrix) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "matrix": [
            [
              1,
              2,
              3
            ],
            [
              4,
              5,
              6
            ],
            [
              7,
              8,
              9
            ]
          ]
        },
        "expected": [
          [
            7,
            4,
            1
          ],
          [
            8,
            5,
            2
          ],
          [
            9,
            6,
            3
          ]
        ]
      },
      {
        "args": {
          "matrix": [
            [
              5,
              1,
              9,
              11
            ],
            [
              2,
              4,
              8,
              10
            ],
            [
              13,
              3,
              6,
              7
            ],
            [
              15,
              14,
              12,
              16
            ]
          ]
        },
        "expected": [
          [
            15,
            13,
            2,
            5
          ],
          [
            14,
            3,
            4,
            1
          ],
          [
            12,
            6,
            8,
            9
          ],
          [
            16,
            7,
            10,
            11
          ]
        ]
      },
      {
        "args": {
          "matrix": [
            [
              1
            ]
          ]
        },
        "expected": [
          [
            1
          ]
        ]
      }
    ]
  },
  {
    "id": "set-matrix-zeroes",
    "title": "Set Matrix Zeroes",
    "difficulty": "Medium",
    "topic": "Math & Geometry",
    "description": "Given an m x n matrix, if an element is 0, set its entire row and column to 0. The function should return the modified matrix. Note that the input matrix will always be a 2D array of integers.",
    "examples": [
      {
        "input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]",
        "explanation": "The element at position (1,1) is 0, so the entire row and column are set to 0"
      },
      {
        "input": "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
        "explanation": "The elements at positions (0,0) and (0,3) are 0, so the entire rows and columns are set to 0"
      }
    ],
    "constraints": [
      "m == matrix.length",
      "n == matrix[0].length",
      "1 <= m, n <= 200",
      "-10^9 <= matrix[i][j] <= 10^9"
    ],
    "functionName": "set_matrix_zeroes",
    "starterCode": {
      "python": "def set_matrix_zeroes(*args):\n    # Write your solution here\n    pass",
      "javascript": "function setMatrixZeroes(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object setMatrixZeroes(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> setMatrixZeroes(vector<vector<int>>& matrix) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "matrix": [
            [
              1,
              1,
              1
            ],
            [
              1,
              0,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
        },
        "expected": [
          [
            1,
            0,
            1
          ],
          [
            0,
            0,
            0
          ],
          [
            1,
            0,
            1
          ]
        ]
      },
      {
        "args": {
          "matrix": [
            [
              0,
              1,
              2,
              0
            ],
            [
              3,
              4,
              5,
              2
            ],
            [
              1,
              3,
              1,
              5
            ]
          ]
        },
        "expected": [
          [
            0,
            0,
            0,
            0
          ],
          [
            0,
            4,
            5,
            0
          ],
          [
            0,
            3,
            1,
            0
          ]
        ]
      },
      {
        "args": {
          "matrix": [
            [
              1,
              2,
              3
            ],
            [
              4,
              5,
              6
            ],
            [
              7,
              8,
              9
            ]
          ]
        },
        "expected": [
          [
            1,
            2,
            3
          ],
          [
            4,
            5,
            6
          ],
          [
            7,
            8,
            9
          ]
        ]
      }
    ]
  },
  {
    "id": "spiral-matrix",
    "title": "Spiral Matrix",
    "difficulty": "Medium",
    "topic": "Math & Geometry",
    "description": "Implement the algorithm for **Spiral Matrix**.\n\nThis is a standard DSA question from the 'Math & Geometry' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "spiral_matrix",
    "starterCode": {
      "python": "def spiral_matrix(*args):\n    # Write your solution here\n    pass",
      "javascript": "function spiralMatrix(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object spiralMatrix(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int spiralMatrix(vector<int>& prices) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy And Sell Stock",
    "difficulty": "Easy",
    "topic": "Sliding Window",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.\n\nYou want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.\n\nReturn *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.",
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "explanation": "In this case, no transactions are done and max profit = 0."
      }
    ],
    "constraints": [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],
    "functionName": "max_profit",
    "starterCode": {
      "python": "def max_profit(prices):\n    # Return maximum profit\n    pass",
      "javascript": "function maxProfit(prices) {\n  // Return maximum profit\n}",
      "java": "class Solution {\n    public int maxProfit(int[] prices) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        return 0;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "prices": [
            7,
            1,
            5,
            3,
            6,
            4
          ]
        },
        "expected": 5
      },
      {
        "args": {
          "prices": [
            7,
            6,
            4,
            3,
            1
          ]
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "longest-repeating-character-replacement",
    "title": "Longest Repeating Character Replacement",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "description": "Implement the algorithm for **Longest Repeating Character Replacement**.\n\nThis is a standard DSA question from the 'Sliding Window' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "longest_repeating_character_replacement",
    "starterCode": {
      "python": "def longest_repeating_character_replacement(*args):\n    # Write your solution here\n    pass",
      "javascript": "function longestRepeatingCharacterReplacement(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object longestRepeatingCharacterReplacement(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestRepeatingCharacterReplacement(string& s) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "longest-substring",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "description": "Given a string `s`, find the length of the longest substring without repeating characters.",
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "The answer is \"abc\""
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1"
      },
      {
        "input": "s = \"pwwkew\"",
        "output": "3"
      }
    ],
    "constraints": [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces"
    ],
    "functionName": "length_of_longest_substring",
    "starterCode": {
      "python": "def length_of_longest_substring(s):\n    # Return length of longest substring without repeating chars\n    pass",
      "javascript": "function lengthOfLongestSubstring(s) {\n  // Return length of longest substring without repeating chars\n}",
      "java": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        return 0;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "abcabcbb"
        },
        "expected": 3
      },
      {
        "args": {
          "s": "bbbbb"
        },
        "expected": 1
      },
      {
        "args": {
          "s": "pwwkew"
        },
        "expected": 3
      },
      {
        "args": {
          "s": ""
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "permutation-in-string",
    "title": "Permutation In String",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "description": "Implement the algorithm for **Permutation In String**.\n\nThis is a standard DSA question from the 'Sliding Window' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "permutation_in_string",
    "starterCode": {
      "python": "def permutation_in_string(*args):\n    # Write your solution here\n    pass",
      "javascript": "function permutationInString(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object permutationInString(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool permutationInString(string& s) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "difficulty": "Hard",
    "topic": "Sliding Window",
    "description": "Implement the algorithm for **Minimum Window Substring**.\n\nThis is a standard DSA question from the 'Sliding Window' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "minimum_window_substring",
    "starterCode": {
      "python": "def minimum_window_substring(*args):\n    # Write your solution here\n    pass",
      "javascript": "function minimumWindowSubstring(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object minimumWindowSubstring(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "sliding-window-maximum",
    "title": "Sliding Window Maximum",
    "difficulty": "Hard",
    "topic": "Sliding Window",
    "description": "Implement the algorithm for **Sliding Window Maximum**.\n\nThis is a standard DSA question from the 'Sliding Window' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "sliding_window_maximum",
    "starterCode": {
      "python": "def sliding_window_maximum(*args):\n    # Write your solution here\n    pass",
      "javascript": "function slidingWindowMaximum(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object slidingWindowMaximum(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "topic": "Stack",
    "description": "Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.\n\nAn input string is valid if open brackets are closed in the correct order.",
    "examples": [
      {
        "input": "s = \"()\"",
        "output": "true"
      },
      {
        "input": "s = \"()[]{}\"",
        "output": "true"
      },
      {
        "input": "s = \"(]\"",
        "output": "false"
      }
    ],
    "constraints": [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only"
    ],
    "functionName": "is_valid",
    "starterCode": {
      "python": "def is_valid(s):\n    # Return True if parentheses are balanced\n    pass",
      "javascript": "function isValid(s) {\n  // Return true if parentheses are balanced\n}",
      "java": "class Solution {\n    public boolean isValid(String s) {\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isValid(string s) {\n        return false;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "()"
        },
        "expected": true
      },
      {
        "args": {
          "s": "()[]{}"
        },
        "expected": true
      },
      {
        "args": {
          "s": "(]"
        },
        "expected": false
      },
      {
        "args": {
          "s": "([)]"
        },
        "expected": false
      },
      {
        "args": {
          "s": "{[]}"
        },
        "expected": true
      }
    ]
  },
  {
    "id": "car-fleet",
    "title": "Car Fleet",
    "difficulty": "Medium",
    "topic": "Stack",
    "description": "Implement the algorithm for **Car Fleet**.\n\nThis is a standard DSA question from the 'Stack' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "car_fleet",
    "starterCode": {
      "python": "def car_fleet(*args):\n    # Write your solution here\n    pass",
      "javascript": "function carFleet(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object carFleet(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto carFleet(int x) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "daily-temperatures",
    "title": "Daily Temperatures",
    "difficulty": "Medium",
    "topic": "Stack",
    "description": "Implement the algorithm for **Daily Temperatures**.\n\nThis is a standard DSA question from the 'Stack' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "daily_temperatures",
    "starterCode": {
      "python": "def daily_temperatures(*args):\n    # Write your solution here\n    pass",
      "javascript": "function dailyTemperatures(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object dailyTemperatures(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "evaluate-reverse-polish-notation",
    "title": "Evaluate Reverse Polish Notation",
    "difficulty": "Medium",
    "topic": "Stack",
    "description": "Implement the algorithm for **Evaluate Reverse Polish Notation**.\n\nThis is a standard DSA question from the 'Stack' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "evaluate_reverse_polish_notation",
    "starterCode": {
      "python": "def evaluate_reverse_polish_notation(*args):\n    # Write your solution here\n    pass",
      "javascript": "function evaluateReversePolishNotation(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object evaluateReversePolishNotation(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "min-stack",
    "title": "Min Stack",
    "difficulty": "Medium",
    "topic": "Stack",
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class: MinStack() initializes the stack, void push(int x) pushes element x onto stack, void pop() removes the element on top of the stack, int top() gets the top element, and int getMin() retrieves the minimum element in the stack. You can assume that all the operations are valid (i.e., pop or top will not be called on an empty stack, and getMin will not be called on an empty stack).",
    "examples": [
      {
        "input": "MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3);",
        "output": "-3",
        "explanation": "The minimum element in the stack is -3"
      },
      {
        "input": "minStack.pop();",
        "output": "0",
        "explanation": "The top element is 0 after popping -3"
      }
    ],
    "constraints": [
      "1 <= x <= 2^31 - 1",
      "At most 3 * 10^4 calls will be made to push, pop, top, and getMin",
      "There will be at least one element in the stack when getMin is called"
    ],
    "functionName": "min_stack",
    "starterCode": {
      "python": "def min_stack(*args):\n    # Write your solution here\n    pass",
      "javascript": "function minStack(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object minStack(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto minStack(int x) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "x": 1
        },
        "expected": null
      },
      {
        "args": {
          "x": -2
        },
        "expected": null
      },
      {
        "args": {
          "x": 0
        },
        "expected": null
      }
    ]
  },
  {
    "id": "largest-rectangle-in-histogram",
    "title": "Largest Rectangle In Histogram",
    "difficulty": "Hard",
    "topic": "Stack",
    "description": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram. The above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3]. The area of the largest rectangle is 10, which is formed by the bars with heights 5 and 6.",
    "examples": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10",
        "explanation": "The area of the largest rectangle is 10, which is formed by the bars with heights 5 and 6"
      },
      {
        "input": "heights = [2,4]",
        "output": "2",
        "explanation": "The area of the largest rectangle is 2, which is formed by the bar with height 2"
      }
    ],
    "constraints": [
      "1 <= heights.length <= 10^5",
      "0 <= heights[i] <= 10^5",
      "It is guaranteed that the answer fits in a 32-bit integer"
    ],
    "functionName": "largest_rectangle_in_histogram",
    "starterCode": {
      "python": "def largest_rectangle_in_histogram(*args):\n    # Write your solution here\n    pass",
      "javascript": "function largestRectangleInHistogram(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object largestRectangleInHistogram(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int largestRectangleInHistogram(vector<int>& heights) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "heights": [
            2,
            1,
            5,
            6,
            2,
            3
          ]
        },
        "expected": 10
      },
      {
        "args": {
          "heights": [
            2,
            4
          ]
        },
        "expected": 2
      },
      {
        "args": {
          "heights": [
            1
          ]
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "balanced-binary-tree",
    "title": "Balanced Binary Tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "description": "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is defined as a binary tree in which the difference between the heights of the two subtrees of every node cannot exceed 1. The height of a binary tree is the number of nodes along the longest path from the root node down to the nearest leaf node.",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "true",
        "explanation": "The tree is balanced"
      },
      {
        "input": "root = [1,2,2,3,3,null,null,4,4]",
        "output": "false",
        "explanation": "The tree is not balanced"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 10^4]",
      "The input tree is represented as a binary tree where each node has a unique value",
      "The absolute value of the values of the nodes will not exceed 10^4"
    ],
    "functionName": "balanced_binary_tree",
    "starterCode": {
      "python": "def balanced_binary_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function balancedBinaryTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object balancedBinaryTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool balancedBinaryTree(auto root) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "root": {
            "val": 3,
            "left": {
              "val": 9
            },
            "right": {
              "val": 20,
              "left": {
                "val": 15
              },
              "right": {
                "val": 7
              }
            }
          }
        },
        "expected": true
      },
      {
        "args": {
          "root": {
            "val": 1,
            "left": {
              "val": 2,
              "left": {
                "val": 3,
                "left": {
                  "val": 4
                },
                "right": {
                  "val": 4
                }
              }
            },
            "right": {
              "val": 2,
              "left": {
                "val": 3
              },
              "right": {
                "val": 3
              }
            }
          }
        },
        "expected": false
      },
      {
        "args": {
          "root": null
        },
        "expected": true
      }
    ]
  },
  {
    "id": "diameter-of-binary-tree",
    "title": "Diameter of Binary Tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "description": "Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root. The length of a path between two nodes is represented by the number of edges between them. The diameter is the maximum length of a path. The function should return the diameter of the binary tree. The input tree is guaranteed to be non-empty and the number of nodes will not exceed 10^4.",
    "examples": [
      {
        "input": "root = [1,2,3,4,5]",
        "output": "3",
        "explanation": "The diameter of the tree is the length of the path between nodes 4 and 5, which is 3 edges."
      },
      {
        "input": "root = [1,2]",
        "output": "1",
        "explanation": "The diameter of the tree is the length of the path between nodes 1 and 2, which is 1 edge."
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "1 <= Node.val <= 10^5",
      "The tree is guaranteed to be non-empty."
    ],
    "functionName": "diameter_of_binary_tree",
    "starterCode": {
      "python": "def diameter_of_binary_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function diameterOfBinaryTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object diameterOfBinaryTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int diameterOfBinaryTree(TreeNode* root) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1,
              {
                "function_name": "TreeNode",
                "args": [
                  2
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  3
                ]
              }
            ]
          }
        },
        "expected": 2
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1,
              {
                "function_name": "TreeNode",
                "args": [
                  2,
                  {
                    "function_name": "TreeNode",
                    "args": [
                      4
                    ]
                  },
                  {
                    "function_name": "TreeNode",
                    "args": [
                      5
                    ]
                  }
                ]
              }
            ]
          }
        },
        "expected": 3
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1
            ]
          }
        },
        "expected": 0
      }
    ]
  },
  {
    "id": "invert-binary-tree",
    "title": "Invert Binary Tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "description": "Invert a binary tree. The function should return the root of the inverted tree. The input tree is guaranteed to be non-empty and the number of nodes will not exceed 10^4.",
    "examples": [
      {
        "input": "root = [4,2,7,1,3,6,9]",
        "output": "[4,7,2,9,6,3,1]",
        "explanation": "The inverted tree is the mirror image of the original tree."
      },
      {
        "input": "root = [2,1,3]",
        "output": "[2,3,1]",
        "explanation": "The inverted tree is the mirror image of the original tree."
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "1 <= Node.val <= 10^5",
      "The tree is guaranteed to be non-empty."
    ],
    "functionName": "invert_binary_tree",
    "starterCode": {
      "python": "def invert_binary_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function invertBinaryTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object invertBinaryTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              4,
              {
                "function_name": "TreeNode",
                "args": [
                  2,
                  {
                    "function_name": "TreeNode",
                    "args": [
                      1
                    ]
                  },
                  {
                    "function_name": "TreeNode",
                    "args": [
                      3
                    ]
                  }
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  7,
                  {
                    "function_name": "TreeNode",
                    "args": [
                      6
                    ]
                  },
                  {
                    "function_name": "TreeNode",
                    "args": [
                      9
                    ]
                  }
                ]
              }
            ]
          }
        },
        "expected": {
          "function_name": "TreeNode",
          "args": [
            4,
            {
              "function_name": "TreeNode",
              "args": [
                7,
                {
                  "function_name": "TreeNode",
                  "args": [
                    9
                  ]
                },
                {
                  "function_name": "TreeNode",
                  "args": [
                    6
                  ]
                }
              ]
            },
            {
              "function_name": "TreeNode",
              "args": [
                2,
                {
                  "function_name": "TreeNode",
                  "args": [
                    3
                  ]
                },
                {
                  "function_name": "TreeNode",
                  "args": [
                    1
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              2,
              {
                "function_name": "TreeNode",
                "args": [
                  1
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  3
                ]
              }
            ]
          }
        },
        "expected": {
          "function_name": "TreeNode",
          "args": [
            2,
            {
              "function_name": "TreeNode",
              "args": [
                3
              ]
            },
            {
              "function_name": "TreeNode",
              "args": [
                1
              ]
            }
          ]
        }
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1
            ]
          }
        },
        "expected": {
          "function_name": "TreeNode",
          "args": [
            1
          ]
        }
      }
    ]
  },
  {
    "id": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "description": "Given the root of a binary tree, return its maximum depth. The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node. The function should return the maximum depth of the binary tree. The input tree is guaranteed to be non-empty and the number of nodes will not exceed 10^4.",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3",
        "explanation": "The maximum depth of the tree is 3, which is the length of the path from the root to the leaf node 15 or 7."
      },
      {
        "input": "root = [1,null,2]",
        "output": "2",
        "explanation": "The maximum depth of the tree is 2, which is the length of the path from the root to the leaf node 2."
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "1 <= Node.val <= 10^5",
      "The tree is guaranteed to be non-empty."
    ],
    "functionName": "maximum_depth_of_binary_tree",
    "starterCode": {
      "python": "def maximum_depth_of_binary_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function maximumDepthOfBinaryTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object maximumDepthOfBinaryTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maximumDepthOfBinaryTree(TreeNode* root) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              3,
              {
                "function_name": "TreeNode",
                "args": [
                  9
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  20,
                  {
                    "function_name": "TreeNode",
                    "args": [
                      15
                    ]
                  },
                  {
                    "function_name": "TreeNode",
                    "args": [
                      7
                    ]
                  }
                ]
              }
            ]
          }
        },
        "expected": 3
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1,
              null,
              {
                "function_name": "TreeNode",
                "args": [
                  2
                ]
              }
            ]
          }
        },
        "expected": 2
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1
            ]
          }
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "same-tree",
    "title": "Same Tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "description": "Given the roots of two binary trees p and q. If the two trees are the same, return true; otherwise, return false. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value. The number of nodes in both trees will be in the range [0, 100]. Each node's value will be unique. Each node's value will be between [0, 100].",
    "examples": [
      {
        "input": "p = [1,2,3], q = [1,2,3]",
        "output": "true",
        "explanation": "The trees are the same"
      },
      {
        "input": "p = [1,2], q = [1,null,2]",
        "output": "false",
        "explanation": "The trees are not the same"
      }
    ],
    "constraints": [
      "The number of nodes in both trees will be in the range [0, 100].",
      "Each node's value will be unique.",
      "Each node's value will be between [0, 100]."
    ],
    "functionName": "same_tree",
    "starterCode": {
      "python": "def same_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function sameTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object sameTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool sameTree(TreeNode* p, TreeNode* q) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "p": {
            "function_name": "TreeNode",
            "args": [
              1,
              {
                "function_name": "TreeNode",
                "args": [
                  2,
                  null,
                  null
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  3,
                  null,
                  null
                ]
              }
            ]
          },
          "q": {
            "function_name": "TreeNode",
            "args": [
              1,
              {
                "function_name": "TreeNode",
                "args": [
                  2,
                  null,
                  null
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  3,
                  null,
                  null
                ]
              }
            ]
          }
        },
        "expected": true
      },
      {
        "args": {
          "p": {
            "function_name": "TreeNode",
            "args": [
              1,
              {
                "function_name": "TreeNode",
                "args": [
                  2,
                  null,
                  null
                ]
              },
              null
            ]
          },
          "q": {
            "function_name": "TreeNode",
            "args": [
              1,
              null,
              {
                "function_name": "TreeNode",
                "args": [
                  2,
                  null,
                  null
                ]
              }
            ]
          }
        },
        "expected": false
      },
      {
        "args": {
          "p": null,
          "q": null
        },
        "expected": true
      }
    ]
  },
  {
    "id": "subtree-of-another-tree",
    "title": "Subtree of Another Tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "description": "Given the roots of two binary trees root and subRoot. Check if the tree rooted at subRoot is a subtree of the tree rooted at root. The number of nodes in the tree rooted at root will not exceed 2000. The number of nodes in the tree rooted at subRoot will not exceed 1000. Each node's value will be between [0, 100].",
    "examples": [
      {
        "input": "root = [3,4,5,1,2], subRoot = [4,1,2]",
        "output": "true",
        "explanation": "The tree rooted at subRoot is a subtree of the tree rooted at root"
      },
      {
        "input": "root = [3,4,5,1,2,null,null,0], subRoot = [4,1,2]",
        "output": "false",
        "explanation": "The tree rooted at subRoot is not a subtree of the tree rooted at root"
      }
    ],
    "constraints": [
      "The number of nodes in the tree rooted at root will not exceed 2000.",
      "The number of nodes in the tree rooted at subRoot will not exceed 1000.",
      "Each node's value will be between [0, 100]."
    ],
    "functionName": "subtree_of_another_tree",
    "starterCode": {
      "python": "def subtree_of_another_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function subtreeOfAnotherTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object subtreeOfAnotherTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool subtreeOfAnotherTree(TreeNode* root, TreeNode* subRoot) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              3,
              {
                "function_name": "TreeNode",
                "args": [
                  4,
                  {
                    "function_name": "TreeNode",
                    "args": [
                      1,
                      null,
                      null
                    ]
                  },
                  {
                    "function_name": "TreeNode",
                    "args": [
                      2,
                      null,
                      null
                    ]
                  }
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  5,
                  null,
                  null
                ]
              }
            ]
          },
          "subRoot": {
            "function_name": "TreeNode",
            "args": [
              4,
              {
                "function_name": "TreeNode",
                "args": [
                  1,
                  null,
                  null
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  2,
                  null,
                  null
                ]
              }
            ]
          }
        },
        "expected": true
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              3,
              {
                "function_name": "TreeNode",
                "args": [
                  4,
                  {
                    "function_name": "TreeNode",
                    "args": [
                      1,
                      null,
                      null
                    ]
                  },
                  {
                    "function_name": "TreeNode",
                    "args": [
                      2,
                      null,
                      null
                    ]
                  }
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  5,
                  null,
                  {
                    "function_name": "TreeNode",
                    "args": [
                      0,
                      null,
                      null
                    ]
                  }
                ]
              }
            ]
          },
          "subRoot": {
            "function_name": "TreeNode",
            "args": [
              4,
              {
                "function_name": "TreeNode",
                "args": [
                  1,
                  null,
                  null
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  2,
                  null,
                  null
                ]
              }
            ]
          }
        },
        "expected": false
      },
      {
        "args": {
          "root": null,
          "subRoot": null
        },
        "expected": true
      }
    ]
  },
  {
    "id": "binary-tree-level-order-traversal",
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "topic": "Trees",
    "description": "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). The number of nodes in the tree is in the range [0, 2000]. -1000 <= Node.val <= 1000.",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]",
        "explanation": "The level order traversal of the tree is [[3],[9,20],[15,7]]"
      },
      {
        "input": "root = [1]",
        "output": "[[1]]",
        "explanation": "The level order traversal of the tree is [[1]]"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 2000].",
      "-1000 <= Node.val <= 1000.",
      "The tree is a binary tree."
    ],
    "functionName": "binary_tree_level_order_traversal",
    "starterCode": {
      "python": "def binary_tree_level_order_traversal(*args):\n    # Write your solution here\n    pass",
      "javascript": "function binaryTreeLevelOrderTraversal(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object binaryTreeLevelOrderTraversal(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> binaryTreeLevelOrderTraversal(TreeNode* root) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              3,
              {
                "function_name": "TreeNode",
                "args": [
                  9,
                  null,
                  null
                ]
              },
              {
                "function_name": "TreeNode",
                "args": [
                  20,
                  {
                    "function_name": "TreeNode",
                    "args": [
                      15,
                      null,
                      null
                    ]
                  },
                  {
                    "function_name": "TreeNode",
                    "args": [
                      7,
                      null,
                      null
                    ]
                  }
                ]
              }
            ]
          }
        },
        "expected": [
          [
            3
          ],
          [
            9,
            20
          ],
          [
            15,
            7
          ]
        ]
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1,
              null,
              null
            ]
          }
        },
        "expected": [
          [
            1
          ]
        ]
      },
      {
        "args": {
          "root": null
        },
        "expected": []
      }
    ]
  },
  {
    "id": "binary-tree-right-side-view",
    "title": "Binary Tree Right Side View",
    "difficulty": "Medium",
    "topic": "Trees",
    "description": "Given the root of a binary tree, return the rightmost node of each level. The rightmost node of a level is the last node in that level when traversed from left to right. The rightmost nodes of each level are returned in a list in the order they were encountered. The number of nodes in the tree is in the range [1, 100]. The values of the nodes in the tree will be in the range [0, 100].",
    "examples": [
      {
        "input": "root = [1,2,3,4]",
        "output": "[1,3,4]",
        "explanation": "The rightmost node of each level is 1, 3, 4"
      },
      {
        "input": "root = [1,null,3]",
        "output": "[1,3]",
        "explanation": "The rightmost node of each level is 1, 3"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [1, 100].",
      "The values of the nodes in the tree will be in the range [0, 100].",
      "The height of the tree is in the range [1, 100]."
    ],
    "functionName": "binary_tree_right_side_view",
    "starterCode": {
      "python": "def binary_tree_right_side_view(*args):\n    # Write your solution here\n    pass",
      "javascript": "function binaryTreeRightSideView(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object binaryTreeRightSideView(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> binaryTreeRightSideView(TreeNode* root) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1,
              2,
              3,
              4
            ]
          }
        },
        "expected": [
          1,
          3,
          4
        ]
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1,
              null,
              3
            ]
          }
        },
        "expected": [
          1,
          3
        ]
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1,
              2
            ]
          }
        },
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "id": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "title": "Construct Binary Tree From Preorder And Inorder Traversal",
    "difficulty": "Medium",
    "topic": "Trees",
    "description": "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree. The number of nodes in the tree is in the range [1, 3000]. The values of the nodes in the tree will be in the range [-3000, 3000].",
    "examples": [
      {
        "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        "output": "[3,9,20,null,null,15,7]",
        "explanation": "The preorder traversal of the binary tree is [3,9,20,15,7] and the inorder traversal is [9,3,15,20,7]"
      },
      {
        "input": "preorder = [-1], inorder = [-1]",
        "output": "[-1]",
        "explanation": "The preorder traversal of the binary tree is [-1] and the inorder traversal is [-1]"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [1, 3000].",
      "The values of the nodes in the tree will be in the range [-3000, 3000].",
      "The preorder and inorder traversals of the tree are guaranteed to be valid."
    ],
    "functionName": "construct_binary_tree_from_preorder_and_inorder_traversal",
    "starterCode": {
      "python": "def construct_binary_tree_from_preorder_and_inorder_traversal(*args):\n    # Write your solution here\n    pass",
      "javascript": "function constructBinaryTreeFromPreorderAndInorderTraversal(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object constructBinaryTreeFromPreorderAndInorderTraversal(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": [
      {
        "args": {
          "preorder": [
            3,
            9,
            20,
            15,
            7
          ],
          "inorder": [
            9,
            3,
            15,
            20,
            7
          ]
        },
        "expected": {
          "function_name": "TreeNode",
          "args": [
            3,
            9,
            20,
            null,
            null,
            15,
            7
          ]
        }
      },
      {
        "args": {
          "preorder": [
            -1
          ],
          "inorder": [
            -1
          ]
        },
        "expected": {
          "function_name": "TreeNode",
          "args": [
            -1
          ]
        }
      },
      {
        "args": {
          "preorder": [
            1,
            2,
            3
          ],
          "inorder": [
            1,
            2,
            3
          ]
        },
        "expected": {
          "function_name": "TreeNode",
          "args": [
            1,
            2,
            3
          ]
        }
      }
    ]
  },
  {
    "id": "count-good-nodes-in-binary-tree",
    "title": "Count Good Nodes In Binary Tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "description": "Given a binary tree root, a node is good if it satisfies the following conditions: (1) the node is a leaf node; (2) all the values in the path from the node to the root are greater than or equal to the node's value. Return the number of good nodes in the binary tree. The number of nodes in the tree is in the range [1, 10^5]. The values of the nodes in the tree will be in the range [1, 10^4].",
    "examples": [
      {
        "input": "root = [3,1,4,3,null,1,2]",
        "output": "2",
        "explanation": "The good nodes are 3 and 4"
      },
      {
        "input": "root = [2,3,5,7,4,12,3,null,null,null,1]",
        "output": "3",
        "explanation": "The good nodes are 7, 4 and 3"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [1, 10^5].",
      "The values of the nodes in the tree will be in the range [1, 10^4].",
      "The height of the tree is in the range [1, 10^4]."
    ],
    "functionName": "count_good_nodes_in_binary_tree",
    "starterCode": {
      "python": "def count_good_nodes_in_binary_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function countGoodNodesInBinaryTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object countGoodNodesInBinaryTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int countGoodNodesInBinaryTree(TreeNode* root) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              3,
              1,
              4,
              3,
              null,
              1,
              2
            ]
          }
        },
        "expected": 2
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              2,
              3,
              5,
              7,
              4,
              12,
              3,
              null,
              null,
              null,
              1
            ]
          }
        },
        "expected": 3
      },
      {
        "args": {
          "root": {
            "function_name": "TreeNode",
            "args": [
              1
            ]
          }
        },
        "expected": 1
      }
    ]
  },
  {
    "id": "kth-smallest-element-in-a-bst",
    "title": "Kth Smallest Element In a Bst",
    "difficulty": "Medium",
    "topic": "Trees",
    "description": "Implement the algorithm for **Kth Smallest Element In a Bst**.\n\nThis is a standard DSA question from the 'Trees' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "kth_smallest_element_in_a_bst",
    "starterCode": {
      "python": "def kth_smallest_element_in_a_bst(*args):\n    # Write your solution here\n    pass",
      "javascript": "function kthSmallestElementInABst(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object kthSmallestElementInABst(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto kthSmallestElementInABst(string& word) {\n        \n    }\n};"
    },
    "testCases": []
  },
  {
    "id": "lowest-common-ancestor-of-a-binary-search-tree",
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "description": "Implement the algorithm for **Lowest Common Ancestor of a Binary Search Tree**.\n\nThis is a standard DSA question from the 'Trees' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "lowest_common_ancestor_of_a_binary_search_tree",
    "starterCode": {
      "python": "def lowest_common_ancestor_of_a_binary_search_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function lowestCommonAncestorOfABinarySearchTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object lowestCommonAncestorOfABinarySearchTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "validate-binary-search-tree",
    "title": "Validate Binary Search Tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "description": "Implement the algorithm for **Validate Binary Search Tree**.\n\nThis is a standard DSA question from the 'Trees' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "validate_binary_search_tree",
    "starterCode": {
      "python": "def validate_binary_search_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function validateBinarySearchTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object validateBinarySearchTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "binary-tree-maximum-path-sum",
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "Hard",
    "topic": "Trees",
    "description": "Implement the algorithm for **Binary Tree Maximum Path Sum**.\n\nThis is a standard DSA question from the 'Trees' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "binary_tree_maximum_path_sum",
    "starterCode": {
      "python": "def binary_tree_maximum_path_sum(*args):\n    # Write your solution here\n    pass",
      "javascript": "function binaryTreeMaximumPathSum(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object binaryTreeMaximumPathSum(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "serialize-and-deserialize-binary-tree",
    "title": "Serialize And Deserialize Binary Tree",
    "difficulty": "Hard",
    "topic": "Trees",
    "description": "Implement the algorithm for **Serialize And Deserialize Binary Tree**.\n\nThis is a standard DSA question from the 'Trees' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "serialize_and_deserialize_binary_tree",
    "starterCode": {
      "python": "def serialize_and_deserialize_binary_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function serializeAndDeserializeBinaryTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object serializeAndDeserializeBinaryTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "design-add-and-search-words-data-structure",
    "title": "Design Add And Search Words Data Structure",
    "difficulty": "Medium",
    "topic": "Tries",
    "description": "Implement the algorithm for **Design Add And Search Words Data Structure**.\n\nThis is a standard DSA question from the 'Tries' topic on NeetCode 150.",
    "examples": [
      {
        "input": "input1 = ...",
        "output": "output1 = ...",
        "explanation": "Explain why output1 is produced."
      }
    ],
    "constraints": [
      "Standard LeetCode constraints apply."
    ],
    "functionName": "design_add_and_search_words_data_structure",
    "starterCode": {
      "python": "def design_add_and_search_words_data_structure(*args):\n    # Write your solution here\n    pass",
      "javascript": "function designAddAndSearchWordsDataStructure(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object designAddAndSearchWordsDataStructure(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    // Implement the solution method\n};"
    },
    "testCases": []
  },
  {
    "id": "implement-trie-prefix-tree",
    "title": "Implement Trie Prefix Tree",
    "difficulty": "Medium",
    "topic": "Tries",
    "description": "Implement a trie with insert, search, and startsWith methods. You may assume that all inputs are consist of lowercase letters a-z. The Trie class should contain the following methods: insert(word), which inserts the word into the trie; search(word), which returns true if the word is in the trie, and false otherwise; startsWith(prefix), which returns true if there is any word in the trie that starts with the given prefix, and false otherwise. The insert, search, and startsWith methods should each run in O(m) time, where m is the length of the word or prefix. The space complexity should be O(n), where n is the total number of characters across all words.",
    "examples": [
      {
        "input": "Trie trie = new Trie(); trie.insert('apple'); trie.search('apple');",
        "output": "true",
        "explanation": "The word 'apple' is in the trie."
      },
      {
        "input": "trie.search('app');",
        "output": "false",
        "explanation": "The word 'app' is not in the trie."
      },
      {
        "input": "trie.startsWith('app');",
        "output": "true",
        "explanation": "There is a word in the trie that starts with 'app'."
      }
    ],
    "constraints": [
      "1 <= word.length, prefix.length <= 2000",
      "word and prefix consist only of lowercase English letters.",
      "At most 3 * 10^4 calls will be made to insert, search, and startsWith."
    ],
    "functionName": "implement_trie_prefix_tree",
    "starterCode": {
      "python": "def implement_trie_prefix_tree(*args):\n    # Write your solution here\n    pass",
      "javascript": "function implementTriePrefixTree(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object implementTriePrefixTree(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto implementTriePrefixTree(string& word) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "word": "apple"
        },
        "expected": null
      },
      {
        "args": {
          "word": "app"
        },
        "expected": false
      },
      {
        "args": {
          "prefix": "app"
        },
        "expected": true
      }
    ]
  },
  {
    "id": "word-search-ii",
    "title": "Word Search II",
    "difficulty": "Hard",
    "topic": "Tries",
    "description": "Given an m x n board of characters and an array of strings words, return all words found in the board. Each word must be constructed from letters board[i][j] where i, j are in the range 0 <= i < m, 0 <= j < n. The same letter cell may not be used more than once in a word. All inputs are in lowercase. The words can be found in any of the 8 directions (up, down, left, right, and four diagonal directions). If the word does not exist in the board, the result should be an empty array.",
    "examples": [
      {
        "input": "board = [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']]; words = ['oath','pea','eat','rain']",
        "output": [
          "eat",
          "oath"
        ],
        "explanation": "The words 'eat' and 'oath' are found in the board."
      },
      {
        "input": "board = [['a','b'],['c','d']]; words = ['abcb']",
        "output": [],
        "explanation": "The word 'abcb' is not found in the board."
      },
      {
        "input": "board = [['a']]; words = ['a']",
        "output": [
          "a"
        ],
        "explanation": "The word 'a' is found in the board."
      }
    ],
    "constraints": [
      "m == board.length",
      "n == board[i].length",
      "1 <= m * n <= 2 * 10^5",
      "1 <= words.length <= 10^5",
      "1 <= words[i].length <= 10^5",
      "board[i][j] is a lowercase English letter.",
      "words[i] consists of lowercase English letters."
    ],
    "functionName": "word_search_ii",
    "starterCode": {
      "python": "def word_search_ii(*args):\n    # Write your solution here\n    pass",
      "javascript": "function wordSearchIi(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object wordSearchIi(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<char> wordSearchIi(vector<vector<char>>& board, vector<char>& words) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "board": [
            [
              "o",
              "a",
              "a",
              "n"
            ],
            [
              "e",
              "t",
              "a",
              "e"
            ],
            [
              "i",
              "h",
              "k",
              "r"
            ],
            [
              "i",
              "f",
              "l",
              "v"
            ]
          ],
          "words": [
            "oath",
            "pea",
            "eat",
            "rain"
          ]
        },
        "expected": [
          "oath",
          "eat"
        ]
      },
      {
        "args": {
          "board": [
            [
              "a",
              "b"
            ],
            [
              "c",
              "d"
            ]
          ],
          "words": [
            "abcb"
          ]
        },
        "expected": []
      },
      {
        "args": {
          "board": [
            [
              "a"
            ]
          ],
          "words": [
            "a"
          ]
        },
        "expected": [
          "a"
        ]
      }
    ]
  },
  {
    "id": "merge-sorted-arrays",
    "title": "Merge Two Sorted Arrays",
    "difficulty": "Easy",
    "topic": "Two Pointers",
    "description": "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order. Merge them into one sorted array and return it.",
    "examples": [
      {
        "input": "nums1 = [1,2,3], nums2 = [2,5,6]",
        "output": "[1,2,2,3,5,6]"
      },
      {
        "input": "nums1 = [1], nums2 = []",
        "output": "[1]"
      }
    ],
    "constraints": [
      "0 <= nums1.length, nums2.length <= 200",
      "Both arrays are sorted"
    ],
    "functionName": "merge_sorted",
    "starterCode": {
      "python": "def merge_sorted(nums1, nums2):\n    # Return merged sorted array\n    pass",
      "javascript": "function mergeSorted(nums1, nums2) {\n  // Return merged sorted array\n}",
      "java": "class Solution {\n    public int[] mergeSorted(int[] nums1, int[] nums2) {\n        return new int[]{};\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> mergeSorted(vector<int>& nums1, vector<int>& nums2) {\n        return {};\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums1": [
            1,
            2,
            3
          ],
          "nums2": [
            2,
            5,
            6
          ]
        },
        "expected": [
          1,
          2,
          2,
          3,
          5,
          6
        ]
      },
      {
        "args": {
          "nums1": [
            1
          ],
          "nums2": []
        },
        "expected": [
          1
        ]
      },
      {
        "args": {
          "nums1": [],
          "nums2": [
            1
          ]
        },
        "expected": [
          1
        ]
      },
      {
        "args": {
          "nums1": [
            1,
            3,
            5
          ],
          "nums2": [
            2,
            4,
            6
          ]
        },
        "expected": [
          1,
          2,
          3,
          4,
          5,
          6
        ]
      }
    ]
  },
  {
    "id": "reverse-string",
    "title": "Reverse String",
    "difficulty": "Easy",
    "topic": "Two Pointers",
    "description": "Write a function that reverses a string. The input string is given as a list of characters `s`. You must do this in-place with O(1) extra memory.",
    "examples": [
      {
        "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]"
      }
    ],
    "constraints": [
      "1 <= s.length <= 10^5",
      "s[i] is a printable ASCII character"
    ],
    "functionName": "reverse_string",
    "starterCode": {
      "python": "def reverse_string(s):\n    # Reverse list s in-place, return the reversed list\n    pass",
      "javascript": "function reverseString(s) {\n  // Reverse array s in-place, return it\n}",
      "java": "class Solution {\n    public char[] reverseString(char[] s) {\n        return s;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string reverseString(string s) {\n        return s;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": [
            "h",
            "e",
            "l",
            "l",
            "o"
          ]
        },
        "expected": [
          "o",
          "l",
          "l",
          "e",
          "h"
        ]
      },
      {
        "args": {
          "s": [
            "H",
            "a",
            "n",
            "n",
            "a",
            "h"
          ]
        },
        "expected": [
          "h",
          "a",
          "n",
          "n",
          "a",
          "H"
        ]
      },
      {
        "args": {
          "s": [
            "a"
          ]
        },
        "expected": [
          "a"
        ]
      }
    ]
  },
  {
    "id": "valid-palindrome",
    "title": "Valid Palindrome",
    "difficulty": "Easy",
    "topic": "Two Pointers",
    "description": "A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    "examples": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "\"amanaplanacanalpanama\" is a palindrome."
      },
      {
        "input": "s = \"race a car\"",
        "output": "false",
        "explanation": "\"raceacar\" is not a palindrome."
      }
    ],
    "constraints": [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters."
    ],
    "functionName": "is_palindrome",
    "starterCode": {
      "python": "def is_palindrome(s):\n    # Return True if s is a palindrome\n    pass",
      "javascript": "function isPalindrome(s) {\n  // Return true if s is a palindrome\n}",
      "java": "class Solution {\n    public boolean isPalindrome(String s) {\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(string s) {\n        return false;\n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "s": "A man, a plan, a canal: Panama"
        },
        "expected": true
      },
      {
        "args": {
          "s": "race a car"
        },
        "expected": false
      },
      {
        "args": {
          "s": " "
        },
        "expected": true
      }
    ]
  },
  {
    "id": "3sum",
    "title": "3Sum",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "description": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets. The input array will have at least three elements, but no more than 3000 elements. The elements of the array will be in the range [-10^5, 10^5].",
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": "The triplets [-1,-1,2] and [-1,0,1] sum to zero."
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]",
        "explanation": "No triplets sum to zero."
      },
      {
        "input": "nums = [0,0,0]",
        "output": "[[0,0,0]]",
        "explanation": "The triplet [0,0,0] sums to zero."
      }
    ],
    "constraints": [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],
    "functionName": "3sum",
    "starterCode": {
      "python": "def 3sum(*args):\n    # Write your solution here\n    pass",
      "javascript": "function 3sum(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object 3sum(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> 3sum(vector<int>& nums) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "nums": [
            -1,
            0,
            1,
            2,
            -1,
            -4
          ]
        },
        "expected": [
          [
            -1,
            -1,
            2
          ],
          [
            -1,
            0,
            1
          ]
        ]
      },
      {
        "args": {
          "nums": [
            0,
            1,
            1
          ]
        },
        "expected": []
      },
      {
        "args": {
          "nums": [
            0,
            0,
            0
          ]
        },
        "expected": [
          [
            0,
            0,
            0
          ]
        ]
      }
    ]
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "description": "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the area of water it contains is maximal. The program should return the maximum area of water the container can contain. The area is calculated as (j - i) * min(ai, aj), where i and j are the indices of the two lines. The input array will have at least two lines, and the indices of the lines are 1-indexed.",
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain was 49."
      },
      {
        "input": "height = [1,1]",
        "output": "1",
        "explanation": "The above vertical lines are represented by array [1,1]. In this case, the max area of water the container can contain was 1."
      }
    ],
    "constraints": [
      "2 <= height.length <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    "functionName": "container_with_most_water",
    "starterCode": {
      "python": "def container_with_most_water(*args):\n    # Write your solution here\n    pass",
      "javascript": "function containerWithMostWater(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object containerWithMostWater(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int containerWithMostWater(vector<int>& height) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "height": [
            1,
            8,
            6,
            2,
            5,
            4,
            8,
            3,
            7
          ]
        },
        "expected": 49
      },
      {
        "args": {
          "height": [
            1,
            1
          ]
        },
        "expected": 1
      },
      {
        "args": {
          "height": [
            4,
            3,
            2,
            1,
            4
          ]
        },
        "expected": 16
      }
    ]
  },
  {
    "id": "two-sum-ii-input-array-is-sorted",
    "title": "Two Sum II Input Array Is Sorted",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "description": "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length. The program should return the indices of the two numbers, index1 and index2, added by 1, as an integer array [index1, index2] of length 2. The tests are generated such that there is exactly one solution. You may not use the same element twice. Your solution must use only constant extra space.",
    "examples": [
      {
        "input": "numbers = [2,7,11,15], target = 9",
        "output": "[1,2]",
        "explanation": "Because numbers[0] + numbers[1] == 2 + 7 == 9, we return [1, 2]."
      },
      {
        "input": "numbers = [2,3,4], target = 6",
        "output": "[1,3]",
        "explanation": "Because numbers[0] + numbers[2] == 2 + 4 == 6, we return [1, 3]."
      }
    ],
    "constraints": [
      "2 <= numbers.length <= 10^4",
      "-10^9 <= numbers[i] <= 10^9",
      "numbers is sorted in non-decreasing order"
    ],
    "functionName": "two_sum_ii_input_array_is_sorted",
    "starterCode": {
      "python": "def two_sum_ii_input_array_is_sorted(*args):\n    # Write your solution here\n    pass",
      "javascript": "function twoSumIiInputArrayIsSorted(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object twoSumIiInputArrayIsSorted(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSumIiInputArrayIsSorted(vector<int>& numbers, int target) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "numbers": [
            2,
            7,
            11,
            15
          ],
          "target": 9
        },
        "expected": [
          1,
          2
        ]
      },
      {
        "args": {
          "numbers": [
            2,
            3,
            4
          ],
          "target": 6
        },
        "expected": [
          1,
          3
        ]
      },
      {
        "args": {
          "numbers": [
            -1,
            0
          ],
          "target": -1
        },
        "expected": [
          1,
          2
        ]
      }
    ]
  },
  {
    "id": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "topic": "Two Pointers",
    "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining. The program should return the total amount of water that can be trapped. The water can only be trapped between two bars if the bars have a height greater than the water level. The water level is the minimum height of the two bars.",
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of water (blue section) are being trapped."
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9",
        "explanation": "The above elevation map is represented by array [4,2,0,3,2,5]. In this case, 9 units of water (blue section) are being trapped."
      }
    ],
    "constraints": [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    "functionName": "trapping_rain_water",
    "starterCode": {
      "python": "def trapping_rain_water(*args):\n    # Write your solution here\n    pass",
      "javascript": "function trappingRainWater(...args) {\n  // Write your solution here\n}",
      "java": "class Solution {\n    public Object trappingRainWater(Object... args) {\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int trappingRainWater(vector<int>& height) {\n        \n    }\n};"
    },
    "testCases": [
      {
        "args": {
          "height": [
            0,
            1,
            0,
            2,
            1,
            0,
            1,
            3,
            2,
            1,
            2,
            1
          ]
        },
        "expected": 6
      },
      {
        "args": {
          "height": [
            4,
            2,
            0,
            3,
            2,
            5
          ]
        },
        "expected": 9
      },
      {
        "args": {
          "height": [
            0,
            0,
            0
          ]
        },
        "expected": 0
      }
    ]
  }
];

export const LANGUAGES = [
  { id: 'python', label: 'Python', piston: 'python' },
  { id: 'javascript', label: 'JavaScript', piston: 'javascript' },
  { id: 'java', label: 'Java', piston: 'java' },
  { id: 'cpp', label: 'C++', piston: 'c++' }
];

export const DIFFICULTY_COLORS = {
  Easy: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Medium: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  Hard: 'text-rose-400 bg-rose-500/10 border-rose-500/20'
};
