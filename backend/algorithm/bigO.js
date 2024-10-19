// Big - O notation
// This is a mathematical concept used in computer science to describe the performace or complexity of an
// algorithm, particularly in terms of time (how fast it runs ) and space (how much memory it uses). It
// gives an upper bound on the algorithm's performances as the input size grows, allowing us to compare the 
// efficiency of diffenents algorithms.

// Key Features of Big - O Notation:
// 1, Describes the worst-case scenario:
// Big - O gives the upper limit of how an algorithm behaves as the input size grows. It tells us the 
// worst - case scenario, which is useful for ensuring that an algorithm won't take too or use too much 
// memory even with the longest possible input.
// 2, Focuses on input Size (n):
// The letter n often represent the size of the input. Big - O notaion focuses on how the algorithm's
// performance changes as n increases.
// 3, Ignores Constants and Lower Terms:
// constants(like 2 or 1/2) and less significant terms are ignored because, in Big - O, we care about how
// the algorithm scales as the input get very large, and constants because less important.

// => Common Big - O Notations :
// 1, O(1) - Constant Time :
    // The algorithm takes the same amount of time to run, regardless of how size of the input.
    // eg: Accessing a specific element in an array.

// 2, O(log n) - Logarithmic Timen: 
    // The time increases slowly as the input size grows, eg A loop tha goes through all n elements in a list.

// 3, O(n) - Linear Time :
    // The time increases proportionally with the inpput size. eg, A loop that goes through all n
    // elements in a list.

// 4, O(n log n) - Linearithmic Time :
    // The time grows faster than linear but slower than quadratic. This is often the time complexity
    // for efficien sorting algorithms.
    // eg: Merge Sort, Heap sort

// 5, O(n2) - Quadratic Time :
    // The time grows as the square of the input size. This is common for algorithms with nested loops.
    // eg: Bubble Sort, where you compare each pair of elements.

// 6, O(n2) - Exponential Time :
    // The time grows very rapidly as the input size ncreases. Algorithms with this complexity are often
    // impratical for large inputs. 
    // eg: Recursive algorithms that solve problems by trying every possible solution to the traveling
    // saleman problem.

    