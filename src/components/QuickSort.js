import React, { useState } from 'react';
const QuickSort = () => {

    const [copySuccess, setCopySuccess] = useState('');
    const code = `def partition(array, low, high):
    pivot = array[high]

    i = low - 1

    for j in range(low, high):
        if array[j] <= pivot:
            i = i + 1
            (array[i], array[j]) = (array[j], array[i])

    (array[i + 1], array[high]) = (array[high], array[i + 1])
    return i + 1

def quickSort(array, low, high):
    if low < high:
        pi = partition(array, low, high)
        quickSort(array, low, pi - 1)
        quickSort(array, pi + 1, high)`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
            .then(() => setCopySuccess('Code copied to clipboard!'))
            .catch(err => setCopySuccess('Failed to copy!'));
    };

    return (
        <>
            <div className="center">
                <h3>Quick Sort</h3>
            </div>
            <div class="info-quick">
                <div>
                    <strong>Time Complexity</strong>
                    <div>
                        Best Case: O(n log n)
                    </div>
                    <div>
                        Average Case: O(n log n)
                    </div>
                    <div>
                        Worst Case: O(n^2)
                    </div>
                    <br></br>

                    <div>
                        <strong>Space Complexity</strong>
                        <div>
                            Auxiliary Space: O(1)
                        </div>
                        <br></br>
                    </div>

                    <div>
                        <strong>Advantages of Quick Sort</strong>
                        <div>Divide and conquer algorithm that is efficient on large datasets</div>
                        <br></br>
                    </div>
                    <div><strong>Disadvantages of Quick Sort</strong>
                        <div>Inefficient for worst case scenario</div>
                    </div>
                </div>

                <div className="code-container">
                    <pre id="codeBlock">{code}</pre>
                    <button onClick={copyToClipboard}>Copy Code</button>
                    {copySuccess && <div style={{ color: 'green', marginTop: '10px' }}>{copySuccess}</div>}
                </div>
            </div>

        </>
    )
}

export default QuickSort