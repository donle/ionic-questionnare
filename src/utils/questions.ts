export class QuestionnareInstances {
    private _questions: {
        question: string,
        mark: number,
        category: string
    }[];
    private _answered: {
        question: string,
        mark: number,
        category: string
    }[];

    constructor() {
        this._initQuestions();
    }

    private _initQuestions() {
        this._questions = [
            { question: "是否有注重饮食的营养搭配，有意的减少吃辛辣食物", mark: 1, category: "健康之轮" },
            { question: "是否有每日按时适量的进食，不会暴饮暴食", mark: 1, category: "健康之轮" },
            { question: "是否用节食减肥来控制体重，并感到胃部不适", mark: 1, category: "健康之轮" },
            { question: "是否每天都有适量的运动", mark: 1, category: "健康之轮" },
            { question: "是否定期会有专项的运动时间", mark: 1, category: "健康之轮" },
            { question: "是否能坚持不懈的进行对自己身体有利的锻炼", mark: 1, category: "健康之轮" },
            { question: "是否有办法调整自己的精神状态", mark: 1, category: "健康之轮" },
            { question: "是否大部分时间里都会早睡早起", mark: 1, category: "健康之轮" },
            { question: "是否觉得自己大部分时候里都是精力充沛的", mark: 1, category: "健康之轮" },
            { question: "是否对现在自己的健康状况比较满意", mark: 1, category: "健康之轮" },
            { question: "是否能在绝大多数的时间里与自己的爱人和睦相处并善于表达爱意", mark: 1, category: "家庭之轮" },
            { question: "是否会在每一个特殊的日子里都能给爱人一些暖心的小惊喜", mark: 1, category: "家庭之轮" },
            { question: "是否有时常的与父母聊天，哪怕家长里短没有重点", mark: 1, category: "家庭之轮" },
            { question: "是否会在每一个应该团聚的节假日（或近日）回家看看父母", mark: 1, category: "家庭之轮" },
            { question: "是否每天都会有固定的时间陪伴孩子", mark: 1, category: "家庭之轮" },
            { question: "是否知道孩子现在的成长阶段，成长变化，烦恼是啥", mark: 1, category: "家庭之轮" },
            { question: "是否是孩子心里最亲近的人，孩子有什么事情都愿意与你分享", mark: 1, category: "家庭之轮" },
            { question: "是否跟兄弟姐妹之间有合适的联系与交流", mark: 1, category: "家庭之轮" },
            { question: "是否对于家庭中的各种长辈都很尊重", mark: 1, category: "家庭之轮" },
            { question: "是否能够站在长辈的基础上去理解他们并做到一些力所能及让他们高兴的事", mark: 1, category: "家庭之轮" },
            { question: "是否有一份能抵挡家庭意外的积蓄", mark: 1, category: "财富之轮" },
            { question: "是否有给予自己，爱人或者孩子奖励或惊喜的积蓄", mark: 1, category: "财富之轮" },
            { question: "是否有一个能支撑你‘任性’的经济基础", mark: 1, category: "财富之轮" },
            { question: "是否对金融有一定的敏感度或关注度", mark: 1, category: "财富之轮" },
            { question: "是否能控制自己的负债，不至于入不敷出", mark: 1, category: "财富之轮" },
            { question: "是否能很明确的知道自己的负债情况会在什么情况下好转", mark: 1, category: "财富之轮" },
            { question: "是否能确保自己或者与爱人共同努力后能够在短期内走出负债情况", mark: 1, category: "财富之轮" },
            { question: "是否考虑合理投资", mark: 1, category: "财富之轮" },
            { question: "是否在思考如何投资会有更合适的回报", mark: 1, category: "财富之轮" },
            { question: "是否考虑过自己需要做哪些立刻可执行的事情就能改变目前的经济状况", mark: 1, category: "财富之轮" },
            { question: "是否与同事关系处理融洽，工作沟通无阻", mark: 1, category: "友情之轮" },
            { question: "是否与上司关系处理融洽，没有抵触心理", mark: 1, category: "友情之轮" },
            { question: "是否认真对待你的员工，帮其排忧解疑，助其进步", mark: 1, category: "友情之轮" },
            { question: "是否与目前的邻里关系处理融洽", mark: 1, category: "友情之轮" },
            { question: "是否有非常知心无话不谈的好友", mark: 1, category: "友情之轮" },
            { question: "是否会与自己的老朋友时常相聚", mark: 1, category: "友情之轮" },
            { question: "是否在自己心情低落状态不佳时，能找到合适的人倾诉并不会造成彼此的负担", mark: 1, category: "友情之轮" },
            { question: "是否有除同学同事以外的好友", mark: 1, category: "友情之轮" },
            { question: "是否有结交新朋友的能力", mark: 1, category: "友情之轮" },
            { question: "是否能对你称为朋友的人，都充满信任", mark: 1, category: "友情之轮" },
            { question: "是否有你能够为之付出金钱，精力，时间的爱好", mark: 2, category: "爱好之轮" },
            { question: "是否有两种及以上你目前所从事的岗位需要以外的工作技能", mark: 2, category: "爱好之轮" },
            { question: "是否能培养出两到三个工作以外的爱好", mark: 2, category: "爱好之轮" },
            { question: "是否能把爱好坚持下去", mark: 2, category: "爱好之轮" },
            { question: "是否做到让自己每天的生活都能增添一些新鲜元素", mark: 2, category: "爱好之轮" },
            { question: "是否能与你的爱人做到彼此包容", mark: 2, category: "爱情之轮" },
            { question: "是否能与你的爱人做到彼此信任", mark: 2, category: "爱情之轮" },
            { question: "是否能在不以回报为前提的努力付出", mark: 2, category: "爱情之轮" },
            { question: "是否会用心感受爱你的人，对你的爱", mark: 2, category: "爱情之轮" },
            { question: "是否做到时刻珍惜", mark: 2, category: "爱情之轮" },
            { question: "是否正在从事你觉得合适自己的工作", mark: 2, category: "事业之轮" },
            { question: "是否正在从事一份让你能感受到快乐的工作", mark: 2, category: "事业之轮" },
            { question: "是否愿意在工作中迎接各种挑战", mark: 2, category: "事业之轮" },
            { question: "是否能够在挑战中努力做到最好，并坚持不懈，不会半途而废", mark: 2, category: "事业之轮" },
            { question: "是否在任何时间都在让自己更加出色", mark: 2, category: "事业之轮" },
            { question: "是否有合理的，适合自己的短期目标（1个月或1个季度）", mark: 2, category: "自我实现" },
            { question: "是否有合理的，适合自己的中期规划（1-5年）", mark: 2, category: "自我实现" },
            { question: "是否有合理的，适合自己的长期规划（5年以上）", mark: 2, category: "自我实现" },
            { question: "是否能做到将自己的目标规划可视化，并努力为实现之而努力", mark: 2, category: "自我实现" },
            { question: "是否对自己拟定的目标期限或事件有定时回顾及总结，做到不断进步", mark: 2, category: "自我实现" },
        ];
        this._answered = [];
    }

    public hasNext () {
        if (this._questions.length > 0) return true;
        else {
            this._questions = this._answered;
            this._answered = [];
            return false;
        }
    }

    public next() {
        const index = Math.floor(Math.random() * this._questions.length);
        const nextQ = this._questions.splice(index, 1)[0];
        this._answered.push(nextQ);
        return nextQ;
    }
}