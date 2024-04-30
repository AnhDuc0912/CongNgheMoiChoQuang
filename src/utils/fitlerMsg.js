export const filterMsgSystem = (content) => {
    if (content === 'created this room.') {
        return " đã tạo phòng."
    } else if (content === "creator dispersed this room") {
        return " đã giải tán nhóm."
    }
}

