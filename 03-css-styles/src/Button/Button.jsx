// import styles from './Button.module.css'

function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    }

    return(
    // <button className="button">Click me</button> // External css
    // <button className={styles.button}>Click me</button> // Modules
    <button style={styles}>Click me</button> // Inline
    )
}
export default Button
