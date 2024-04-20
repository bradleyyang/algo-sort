import React, { useState } from 'react';


const InsertionSort = () => {
    const [copySuccess, setCopySuccess] = useState('');

    const code = `def insertionSort(arr):
    n = len(arr)
    if n <= 1:
        return
    for i in range(1, n):  
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
            .then(() => setCopySuccess('Code copied to clipboard!'))
            .catch(err => setCopySuccess('Failed to copy!'));
    };


    return (
        <>
            <div className="center">
                <h3>Insertion Sort</h3>
            </div>
            <div class="info">
                <div>
                    <strong>Time Complexity</strong>
                    <div>
                        Best case: O(n)
                    </div>
                    <div>Average case: O(n^2)</div>
                    <div>Worst case: O(n^2)</div>
                    <br></br>
                </div>

                <div>
                    <strong>Space Complexity</strong>
                    <div>
                        Auxiliary Space: O(1)
                    </div>
                    <br></br>
                </div>

                <div>
                    <strong>Advantages of Insertion Sort</strong>
                    <div>Easy to implement</div>
                    <div>Efficient for small lists</div>
                    <br></br>
                </div>
                <div><strong>Disadvantages of Insertion Sort</strong>
                    <div>Less efficient than other sorting algorithms</div>
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

export default InsertionSort