import React, { useState } from 'react';
import data from '../data.json';

function ImageUploadPage() {
    const [motaModel, setMotaModel] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('http://127.0.0.1:5000/upload_image', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                setResult(data);
            } else {
                setResult({ error: 'Failed to process image' });
            }
        } catch (error) {
            console.error('Error:', error);
            setResult({ error: 'An error occurred' });
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSubmit} disabled={!selectedFile}>Upload and Classify</button>

            {result && (
                <div>
                    <h2>Classification Result:</h2>
                    {result.error ? (
                        <p style={{ color: 'red' }}>{result.error}</p>
                    ) : (
                        <>
                            <p>Best Class: {result.best_class_name}</p>
                            <p>Confidence: {result.highest_confidence}</p>
                        </>
                    )}
                    <h2>

                    </h2>
                </div>
            )}
        </div>
    );
}

export default ImageUploadPage;
