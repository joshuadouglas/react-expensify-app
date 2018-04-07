import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <p>404 Error!</p>
        <Link to="/">Go Home</Link>
    </div>
);

export default PageNotFound;