const base = {
    get() {
                return {
            url : "http://localhost:8080/ershoushangpinjiaoyi/",
            name: "ershoushangpinjiaoyi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ershoushangpinjiaoyi/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "校园二手物品交易平台"
        } 
    }
}
export default base
