import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ComicList from './ComicsList';
import useFetch from '../../hooks/useFetch';

const ComicListContainer = ( { id } ) => {
    const [items] = useFetch(`https://fakestoreapi.com/products/`)
 
    return (
        <Container>
            <Row>
                {
                    items !== null &&
                    <ComicList items={items} />
                }
            </Row>
        </Container>
    )
}

export default ComicListContainer