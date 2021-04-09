module.exports = {
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    title: "金财事业群前端开发手册",
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        title: "金财事业群前端开发手册",
        logo: "/favicon.ico",
        sidebarDepth: 2,
        // sidebar: 'auto',
        navbar: true,
        markdown: {
            lineNumbers: true,
        },
        displayAllHeaders: false,
        search: true, // 是否使用搜索组件
        searchMaxSuggestions: 10, // 搜索匹配数量
        lastUpdated: "上次更新", // string | boolean
        nav: [
            { text: "首页", link: "/" },
            { text: "ttk2.x/react", link: "/ttk2.x/react/" },
        ],
        sidebar: {
            "/ttk2.x/react/": [
                "",
                "目录结构",
                "环境准备",
                "常用Git命令",
                "开发规范",
                "公共工具类",
                "公共组件",
                "门户赋能",
                "开发套路",
                "常见问题",
            ],
        },
    },
    base: "/fx-developer-guide/",
    dest: "public",
}
