const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot9k8n9/",
            name: "springboot9k8n9",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "网吧管理系统"
        } 
    }
}
export default base
