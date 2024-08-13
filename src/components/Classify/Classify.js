import React, { useState, useEffect } from 'react';
// import data from '../data.json';
import data from '../../data/data.json';
import '../Classify/Classify.css';

function Classify() {
    // const [motaModel, setMotaModel] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null); // To store the preview URL
    const [result, setResult] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('https://food-server-le3l.onrender.com/upload_image', {
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

    useEffect(() => {
        return () => {
            if (previewImage) {
                URL.revokeObjectURL(previewImage);
            }
        };
    }, [previewImage]);

    return (
        <div className="phrase_app">
            <div className="container">
                <h1>Image Classification</h1>
                {previewImage && (
                    <div>
                        <img src={previewImage} alt="Uploaded Preview" style={{ maxWidth: '100%' }} />
                    </div>
                )}

                <input type="file" onChange={handleFileChange} className="file-input" />
                <button onClick={handleSubmit} disabled={!selectedFile} className="classify-button">
                    Upload and Classify
                </button>
            </div>
            {result && (
                <div className="result-section">
                    <h2>Classification Result:</h2>
                    {result.error ? (
                        <p className="error-message">{result.error}</p>
                    ) : (
                        <>
                            <p>Best Class: {result.best_class_name}</p>
                            <p>Confidence: {parseFloat(result.highest_confidence).toFixed(2)}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}


export default Classify;