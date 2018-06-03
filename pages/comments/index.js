import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title} from './index.md';
import { VK, Comments } from 'react-vk';

class CommentsPage extends React.Component {

    componentDidMount() {
        document.title = title;
    }

    render() {
        return (
            <Layout className={s.content}>
                <h1>Your comments</h1>
                <VK apiId={6485151}>
                    <Comments onNewComment={handleNewComment} />
                </VK>
            </Layout>
        );
    }

}
export default CommentsPage;
const handleNewComment = (num, last_comment, date, sign) => {
    console.log(last_comment);
};