


import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const TopicKeywordComponent = () => {
    const data = [
        {
            title: "topic1",
            description: "lorem ipsum initiated"
        },
        {
            title: "topic2",
            description: "lorem ipsum initiated"
        },
        {
            title: "topic1",
            description: "lorem ipsum initiated"
        },
        {
            title: "topic1",
            description: "lorem ipsum initiated"
        },
        {
            title: "topic1",
            description: "lorem ipsum initiated"
        },
        {
            title: "topic1",
            description: "lorem ipsum initiated"
        },
        {
            title: "topic1",
            description: "lorem ipsum initiated"
        },
        {
            title: "topic1",
            description: "lorem ipsum initiated"
        },
        {
            title: "topic1",
            description: "lorem ipsum initiated"
        }


    ];

    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="container mt-4">
            <div className=' d-flex flex-wrap'>
                {data.map((item, index) => (
                    <div key={index}>
                        <Button
                            variant="button-primary"
                            className='button-primary-outline m-3'
                            onClick={() => {
                                setSelectedItem(item);
                            }}
                        >
                            {item.title}
                        </Button>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <div className="mt-4">
                    <h4>{selectedItem.title}</h4>
                    <p>{selectedItem.description}</p>
                </div>
            )}
        </div>
    );
}

export default TopicKeywordComponent;

