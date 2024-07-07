
document.addEventListener('DOMContentLoaded', () =>
{
    const checkButton = document.getElementById('checkButton');
    const resultsDiv = document.getElementById('results');
    const scoreParagraph = document.getElementById('score');

    checkButton.addEventListener('click', () =>
    {
        // List of predefined string pairs and their expected results
        const stringPairs = [
            ["example", "exmaple", true],  // Swappable
            ["abcdef", "abcfed", true],    // Swappable
            ["abcde", "abced", true],      // Swappable
            ["12345", "12354", true],      // Swappable
            ["hello", "holle", true],      // Swappable
            ["swap", "swpa", true],        // Swappable
            ["test", "tset", true],        // Swappable
            ["abc", "acb", true],          // Swappable
            ["same", "same", false],       // Already equal
            ["abcd", "abcd", false],       // Already equal
            ["abcd", "efgh", false],       // Completely different
            ["abcd", "abdc", true],        // Swappable
            ["abcd", "abcd", false],       // Already equal
            ["converse", "conserve", true],// Swappable
            ["testing", "setting", true],  // Swappable
            ["aaaa", "bbbb", false],       // Completely different
            ["aabb", "bbaa", false],       // More than one swap needed
            ["abcd", "abcf", false],       // One character different
            ["abcd", "abdc", true]         // Swappable
        ];

        // Clear previous results
        resultsDiv.innerHTML = '';
        scoreParagraph.textContent = '';

        let correctAnswers = 0;

        // Check each pair
        stringPairs.forEach(pair =>
        {
            const [s1, s2, expectedResult] = pair;
            const canBeEqual = challengeAnswer(s1, s2);

            // Log each pair and result for debugging
            // console.log(`Checking pair: "${s1}" and "${s2}", expected: ${expectedResult}, got: ${canBeEqual}`);

            // Create a result paragraph
            const resultParagraph = document.createElement('p');
            if (canBeEqual === expectedResult)
            {
                correctAnswers++;
            }

            // Append the result to the results div
            resultsDiv.appendChild(resultParagraph);
        });

        // Display the score
        scoreParagraph.textContent = `You got ${correctAnswers} out of ${stringPairs.length} correct.`;
    });
});


