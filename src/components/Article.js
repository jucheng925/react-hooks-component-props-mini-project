import React from "react";


function Article({title, date = "January 1, 1970", preview, minutes}){
    function minToRead() {
        let x = minutes;
        let emojiArray = [];
        if (minutes < 30) {
            while (x > 0) {
                emojiArray.push("☕️")
                x = x - 5;
            }
        }
        else {
            while (x > 0) {
                emojiArray.push("🍱")
                x = x - 10;
            }
        }
        return emojiArray
    }
    

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {minToRead()} {minutes} min read </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article