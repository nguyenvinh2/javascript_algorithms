# Knapsack Challenge

## Given a knapsack with a certain weight capacity, fill it with loot from a list of items to achieve the highest value possible.

The function takes two parameters: an int specifying the maximum weight the knapsack can hold, and an array of item Objects to choose from. Each item has a name, a weight, and a value. The total weight of all chosen items cannot exceed the capacity of the knapsack.

The function should return an object containing the capacity of the bag, a list of items that were added to the bag (in the same order that they were given), the total weight of those items, and the total value of the items.

        knapsack(0, items) ➞ {
            capacity: 0,
            items: [],
            weight: 0,
            value: 0
        }