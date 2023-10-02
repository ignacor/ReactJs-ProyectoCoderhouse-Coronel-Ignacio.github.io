import React from 'react'
import { Col } from 'react-bootstrap';

import ComicCard from './ComicCard';
const ComicList = ({ items }) => {
    return (
        <>
            {
                items.map((item) => (
                    <Col md={4} lg={4} sm={12} key={item.id} >
                        <ComicCard item={item} />
                    </Col>
                ))
            }
        </>
    )
}

export default ComicList