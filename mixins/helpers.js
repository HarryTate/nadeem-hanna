export default {
    methods: {
        toPascalCase(text) {
            //This could be a global function
            return text.replace(/(^\w|-\w)/g, this.clearAndUpper);
        },
        clearAndUpper(text) {
            //This could be a global function
            return text.replace(/-/, "").toUpperCase();
        }
    }
}