export const filterMsgSystem = (content) => {
    if (content === 'created this room.') {
        return " đã tạo nhóm"
    } else if (content === "creator dispersed this room.") {
        return " đã giải tán nhóm"
    }
    return "";
}

