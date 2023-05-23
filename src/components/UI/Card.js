import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; // take into account styling of card + other required styling (e.g. ExpenseItem needs expense-item styling)
    return <div className={classes}>{props.children}</div>;
}

export default Card;