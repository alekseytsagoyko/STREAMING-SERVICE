import React from 'react';
import Header from "@components/main/content/publish/Header";
import Form from "@components/main/content/publish/Form";
import styles from '@styles/main/content/publish/publish.css';

function Publish() {
    return (
        <div className={styles.publish}>
            <Header />
            <Form />
        </div>
    );
}

export default Publish;