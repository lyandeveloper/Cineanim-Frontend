import styles from './styles.module.scss';
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export function Header() {
    async function search() {
        alert('procurando...')
    }

    return( 
            <header className={styles.header}>
                <img src="/logo.png" alt="logo.png"/>
    
                    <form className={styles.search} onSubmit={search} >
                        <input type="search" placeholder="Procure por um anime" />
                    </form>

                    <article className={styles.profile}>
                        <IconButton color="primary" style={{ marginRight: 40 }}>
                            <NotificationsActiveIcon />
                        </IconButton>
                        <Avatar src="https://scontent.fphb1-1.fna.fbcdn.net/v/t39.30808-6/245650764_3407197576072178_5787317768630472427_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=GOZUmNaYaNwAX9y_dXe&_nc_ht=scontent.fphb1-1.fna&oh=623e226cd0273555507846c2f8cfae5b&oe=61A506BA"/>
                    </article> 
                    
            </header> 
    )
}