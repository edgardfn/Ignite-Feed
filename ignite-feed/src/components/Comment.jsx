import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles  from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        console.log('content comment ===', content)
        onDeleteComment(content);
    }

    function handleLikeComment () {
        // setLikeCount(likeCount + 1);
        setLikeCount((state) => {
            return state + 1;
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/edgardfn.png" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Edgard Finotti Neto</strong>
                            <time title='14 de Novembro às 16:00' dateTime="2022-11-14 08:13:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}