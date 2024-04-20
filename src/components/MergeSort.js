import React, { useState } from 'react';

const MergeSort = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const code = `def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m

    L = [0] * (n1)
    R = [0] * (n2)
 
    for i in range(0, n1):
        L[i] = arr[l + i]
 
    for j in range(0, n2):
        R[j] = arr[m + 1 + j]

    i = 0    
    j = 0     
    k = l     
 
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1
 
    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1
 
    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1
 
def mergeSort(arr, l, r):
    if l < r:
        m = l+(r-l)//2
        mergeSort(arr, l, m)
        mergeSort(arr, m+1, r)
        merge(arr, l, m, r)`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
            .then(() => setCopySuccess('Code copied to clipboard!'))
            .catch(err => setCopySuccess('Failed to copy!'));
    };



    return (
        <>
            <div className="center">
                <h3>Merge Sort</h3>
            </div>
            <div class="info-merge">
                <div>
                    <strong>Time Complexity</strong>
                    <div>
                        Best case: O(n log n)
                    </div>
                    <div>Average case: O(n log n)</div>
                    <div>Worst case: O(n log n)</div>
                    <br></br>
                </div>

                <div>
                    <strong>Space Complexity</strong>
                    <div>
                        O(n)
                    </div>
                    <br></br>
                </div>

                <div>
                    <strong>Advantages of Merge Sort</strong>
                    <div>Efficient even in the worse case scenario</div>
                    <br></br>
                </div>
                <div><strong>Disadvantages of Merge Sort</strong>
                    <div>Requires additional space to store sub merged subarrays during sorting process</div>
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

export default MergeSort