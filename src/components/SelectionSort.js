import React, { useState } from 'react';
const SelectionSort = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const code = `def selectionSort(array, size):
    for ind in range(size):
        min_index = ind
        for j in range(ind + 1, size):
            if array[j] < array[min_index]:
                min_index = j
        (array[ind], array[min_index]) = (array[min_index], array[ind])`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
            .then(() => setCopySuccess('Code copied to clipboard!'))
            .catch(err => setCopySuccess('Failed to copy!'));
    };
    return (

        <>
            <div className="center">
                <h3>Selection Sort</h3>
            </div>
            <div class="info">
                <div>
                    <strong>Time Complexity</strong>
                    <div>
                        O(n^2)
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
                        <strong>Advantages of Selection Sort</strong>
                        <div>Easy to understand</div>
                        <br></br>
                    </div>
                    <div><strong>Disadvantages of Selection Sort</strong>
                        <div>Inefficient</div>
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

export default SelectionSort