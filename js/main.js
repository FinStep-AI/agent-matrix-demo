/**
 * 新零售智能经营平台 - 交互逻辑
 * 落地页 + 三模块页面导航
 */

// SVG Icon constants for dynamic content
const SVG_ICONS = {
    bot: '<svg viewBox="0 0 20 20" width="18" height="18"><rect x="4" y="4" width="12" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="9" r="1.2" fill="currentColor"/><circle cx="12" cy="9" r="1.2" fill="currentColor"/><path d="M7,16 L7,14 M13,16 L13,14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    user: '<svg viewBox="0 0 20 20" width="18" height="18"><circle cx="10" cy="7" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M3,17 Q3,12 10,12 Q17,12 17,17" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
    chart: '<svg viewBox="0 0 40 40" width="36" height="36"><polyline points="6,30 14,18 22,22 30,10 36,14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="10" r="2" fill="currentColor" opacity="0.4"/></svg>',
    search: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><circle cx="6" cy="6" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="9" x2="12" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
    store: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><path d="M2,6 L7,2 L12,6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><rect x="3" y="6" width="8" height="6" rx="0.5" fill="none" stroke="currentColor" stroke-width="1.1"/></svg>',
    bulb: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><path d="M7,1 Q11,1 11,5.5 Q11,8 9,9 L9,10.5 L5,10.5 L5,9 Q3,8 3,5.5 Q3,1 7,1 Z" fill="none" stroke="currentColor" stroke-width="1.1"/><line x1="5.5" y1="12" x2="8.5" y2="12" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>',
    pkg: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><rect x="2" y="4" width="10" height="8" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M4,4 L4,2.5 Q7,1 10,2.5 L10,4" fill="none" stroke="currentColor" stroke-width="1.1"/></svg>',
    barchart: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><rect x="2" y="7" width="2" height="5" rx="0.3" fill="currentColor" opacity="0.5"/><rect x="6" y="4" width="2" height="8" rx="0.3" fill="currentColor" opacity="0.7"/><rect x="10" y="2" width="2" height="10" rx="0.3" fill="currentColor"/></svg>',
    warning: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><path d="M7,1 L13,12 L1,12 Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><line x1="7" y1="5" x2="7" y2="8.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="7" cy="10.2" r="0.7" fill="currentColor"/></svg>',
    people: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><circle cx="7" cy="4.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M2,12 Q2,8.5 7,8.5 Q12,8.5 12,12" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>',
    trophy: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><path d="M4,2 L10,2 L10,7 Q10,10 7,10 Q4,10 4,7 Z" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="7" y1="10" x2="7" y2="12" stroke="currentColor" stroke-width="1.2"/><line x1="4.5" y1="12" x2="9.5" y2="12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
    trendUp: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><polyline points="2,10 5,6 8,8 12,3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9,3 L12,3 L12,6" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    clock: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><circle cx="7" cy="7" r="5.5" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M7,3.5 L7,7 L9.5,8.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    trendDown: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><polyline points="2,3 5,7 8,5 12,10" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9,10 L12,10 L12,7" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    coin: '<svg viewBox="0 0 14 14" width="12" height="12" style="vertical-align:-1px"><circle cx="7" cy="7" r="5.5" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="7" y="10" text-anchor="middle" fill="currentColor" font-size="8" font-weight="600">¥</text></svg>',
};

// =========================================
// 场景配置
// =========================================
const SCENE_CONFIG = {
    bar: {
        name: '吧台清洁检查',
        image: 'assets/images/bar_counter_sample.jpg',
        store: '某茶饮品牌 · 朔州店',
        status: 'pass',
        detections: [
            { top: '80%', left: '5%', width: '90%', height: '15%', label: '✓ 地面清洁', pass: true },
            { top: '25%', left: '30%', width: '40%', height: '20%', label: '✓ 台面整洁', pass: true }
        ],
        result: {
            is_scene: true,
            status: 0,
            desc: '',
            confidence: 0.94,
            details: [
                { label: '场景识别', value: '吧台后台', pass: true },
                { label: '地面状态', value: '清洁合格', pass: true },
                { label: '台面状态', value: '整洁有序', pass: true },
                { label: '设备摆放', value: '规范整齐', pass: true }
            ]
        },
        analysisSteps: ['场景识别中...', '检测地面清洁度...', '检测台面整洁度...', '生成检测报告...']
    },
    equipment: {
        name: '设备运行检查',
        image: 'assets/images/heater_sample.jpg',
        store: '某茶饮品牌 · 郓城店',
        status: 'pass',
        detections: [
            { top: '20%', left: '25%', width: '30%', height: '40%', label: '✓ 加热管正常', pass: true },
            { top: '30%', left: '60%', width: '25%', height: '30%', label: '✓ 温控正常', pass: true }
        ],
        result: {
            is_scene: true,
            status: 0,
            desc: '',
            confidence: 0.91,
            details: [
                { label: '场景识别', value: '加热设备', pass: true },
                { label: '加热管状态', value: '清洁正常', pass: true },
                { label: '温度显示', value: '工作正常', pass: true },
                { label: '设备清洁', value: '符合标准', pass: true }
            ]
        },
        analysisSteps: ['识别设备类型...', '检测运行状态...', '检测清洁程度...', '生成检测报告...']
    },
    staff: {
        name: '员工着装检查',
        image: 'assets/images/staff_uniform.png',
        store: '标准着装参考',
        status: 'pass',
        detections: [
            { top: '5%', left: '10%', width: '35%', height: '25%', label: '✓ 工帽佩戴', pass: true },
            { top: '30%', left: '8%', width: '38%', height: '50%', label: '✓ 工服整洁', pass: true },
            { top: '5%', left: '55%', width: '35%', height: '25%', label: '✓ 工帽佩戴', pass: true },
            { top: '30%', left: '55%', width: '38%', height: '50%', label: '✓ 工服整洁', pass: true }
        ],
        result: {
            is_scene: true,
            status: 0,
            desc: '',
            confidence: 0.97,
            details: [
                { label: '场景识别', value: '员工着装', pass: true },
                { label: '工帽佩戴', value: '符合规范', pass: true },
                { label: '工服穿着', value: '整洁规范', pass: true },
                { label: '整体仪容', value: '合格', pass: true }
            ]
        },
        analysisSteps: ['识别人员...', '检测工帽佩戴...', '检测工服穿着...', '生成检测报告...']
    },
    store: {
        name: '门店外观检查',
        image: 'assets/images/store_front.png',
        store: '门店外观参考',
        status: 'pass',
        detections: [
            { top: '10%', left: '20%', width: '60%', height: '30%', label: '✓ 招牌完好', pass: true },
            { top: '50%', left: '35%', width: '30%', height: '25%', label: '✓ 二维码清晰', pass: true }
        ],
        result: {
            is_scene: true,
            status: 0,
            desc: '',
            confidence: 0.93,
            details: [
                { label: '场景识别', value: '门店外观', pass: true },
                { label: '招牌状态', value: '完好亮灯', pass: true },
                { label: '二维码', value: '清晰可扫', pass: true },
                { label: '整体形象', value: '符合标准', pass: true }
            ]
        },
        analysisSteps: ['识别门店外观...', '检测招牌状态...', '检测二维码...', '生成检测报告...']
    },
    wash: {
        name: '洗手区检查',
        image: 'assets/images/wash_area_sample.jpg',
        store: '某茶饮品牌 · 成都店',
        status: 'fail',
        detections: [
            { top: '15%', left: '30%', width: '40%', height: '30%', label: '✓ 烘手机正常', pass: true },
            { top: '55%', left: '15%', width: '50%', height: '35%', label: '⚠ 洗手池有冰块', pass: false }
        ],
        result: {
            is_scene: true,
            status: 1,
            desc: '洗手池内有冰块残留，需要清理',
            confidence: 0.89,
            details: [
                { label: '场景识别', value: '洗手区', pass: true },
                { label: '烘手机', value: '清洁正常', pass: true },
                { label: '洗手池', value: '有杂物残留', pass: false },
                { label: '整体清洁', value: '需改进', pass: false }
            ]
        },
        analysisSteps: ['识别洗手区...', '检测烘手机状态...', '检测洗手池清洁度...', '生成检测报告...']
    }
};

// ChatBI响应配置
const CHATBI_RESPONSES = {
    '哪些门店本周销售下滑需要关注？': {
        response: `<p><strong>${SVG_ICONS.search} 销售预警分析完成</strong></p>
            <p style="margin: 8px 0;">检测到 <span style="color: var(--accent-red); font-weight: 600;">3家门店</span> 本周销售下滑超过15%：</p>
            <div style="background: rgba(248,81,73,0.1); padding: 10px; border-radius: 8px; margin: 8px 0; font-size: 12px;">
                <p>${SVG_ICONS.store} 杭州西湖店：↓18.2% (日均少卖¥2,340)</p>
                <p>${SVG_ICONS.store} 苏州观前店：↓16.5% (日均少卖¥1,890)</p>
                <p>${SVG_ICONS.store} 南京新街口店：↓15.8% (日均少卖¥1,720)</p>
            </div>
            <p style="color: var(--accent-blue); margin-top: 12px;"><strong>${SVG_ICONS.bulb} AI建议：</strong></p>
            <p style="font-size: 12px;">1. 杭州西湖店周边新开竞品门店，建议开展促销活动</p>
            <p style="font-size: 12px;">2. 苏州、南京门店客流正常但转化率下降，建议检查服务质量</p>`,
        chart: 'salesWarning',
        insight: { type: 'warning', icon: SVG_ICONS.warning, title: '销售预警', text: '3家门店销售下滑超15%，建议立即跟进处理' }
    },
    '预测明天各门店的柠檬需求量，给出补货建议': {
        response: `<p><strong>${SVG_ICONS.pkg} 物料需求预测完成</strong></p>
            <p style="margin: 8px 0; font-size: 13px;">基于历史销量、天气、节假日等因素，预测明日柠檬需求：</p>
            <div style="background: rgba(88,166,255,0.1); padding: 10px; border-radius: 8px; margin: 8px 0; font-size: 12px;">
                <p>${SVG_ICONS.barchart} 全区域预计需求：<strong>2,850kg</strong></p>
                <p>${SVG_ICONS.pkg} 当前库存：<strong>1,920kg</strong></p>
                <p>${SVG_ICONS.warning} 缺口：<span style="color: var(--accent-red); font-weight: 600;">930kg</span></p>
            </div>
            <p style="color: var(--accent-blue); margin-top: 12px;"><strong>${SVG_ICONS.bulb} 智能补货建议：</strong></p>
            <p style="font-size: 12px;">• 建议今日16:00前下单补货 1,000kg</p>
            <p style="font-size: 12px;">• 优先配送：杭州仓 → 华东区12家门店</p>`,
        chart: 'supplyForecast',
        insight: { type: 'highlight', icon: SVG_ICONS.pkg, title: '补货提醒', text: '柠檬库存缺口930kg，建议今日16:00前下单' }
    },
    '分析华东区门店的人效情况，如何优化排班？': {
        response: `<p><strong>${SVG_ICONS.people} 人效分析报告</strong></p>
            <p style="margin: 8px 0; font-size: 13px;">华东区32家门店人效数据（杯/人·时）：</p>
            <div style="background: rgba(63,185,80,0.1); padding: 10px; border-radius: 8px; margin: 8px 0; font-size: 12px;">
                <p>${SVG_ICONS.trophy} TOP3高效门店：22.4 / 21.8 / 20.9</p>
                <p>${SVG_ICONS.barchart} 区域平均：18.6</p>
                <p>${SVG_ICONS.warning} 待改进门店：15.2 / 14.8 / 13.9</p>
            </div>
            <p style="color: var(--accent-blue); margin-top: 12px;"><strong>${SVG_ICONS.bulb} 排班优化建议：</strong></p>
            <p style="font-size: 12px;">1. 高峰时段（11:00-13:00, 17:00-19:00）增加1-2人</p>
            <p style="font-size: 12px;">2. 低谷时段（14:00-16:00）可减少至2人值班</p>`,
        chart: 'efficiency',
        insight: { type: 'success', icon: SVG_ICONS.trendUp, title: '优化机会', text: '调整排班后预计人效可提升15%' }
    }
};

// =========================================
// 客服/加盟对话场景配置
// =========================================
const SERVICE_CONVERSATIONS = {
    policy: {
        question: '新员工入职需要准备哪些材料？',
        answer: `<p>根据公司规定，新员工入职需要准备以下材料：</p>
            <ol><li>身份证原件及复印件</li><li>健康证（食品行业必备）</li><li>学历证明</li><li>一寸照片2张</li><li>银行卡信息</li></ol>
            <p class="tip">${SVG_ICONS.bulb} 提示：健康证需在有效期内，可在当地疾控中心办理。</p>`,
        related: ['健康证如何办理？', '入职培训流程', '试用期规定']
    },
    delivery: {
        question: '我的订单配送延迟了，什么时候能到？',
        answer: `<p>已为您查询订单状态：</p>
            <div style="background:var(--bg-elevated);padding:10px;border-radius:8px;margin:8px 0;font-size:12px;">
                <p>订单号：DD20260329-8847</p>
                <p>状态：配送中（骑手已取餐）</p>
                <p>预计送达：<strong>12分钟内</strong></p>
            </div>
            <p class="tip">${SVG_ICONS.bulb} 因午高峰订单较多，配送时间略有延长，已为您赠送5元优惠券作为补偿。</p>`,
        related: ['申请退款', '修改配送地址', '联系骑手']
    },
    operation: {
        question: '门店日营业额突然下降20%，如何排查原因？',
        answer: `<p><strong>营业额下降排查步骤：</strong></p>
            <ol><li>检查客流量：对比同期进店人数变化</li><li>分析客单价：是否有促销活动到期</li><li>审查商品结构：热销品是否缺货</li><li>查看外部因素：天气、周边竞品活动</li></ol>
            <p class="tip">${SVG_ICONS.bulb} AI已分析：您门店近3天客流正常，但客单价下降18%，建议检查套餐组合策略。</p>`,
        related: ['如何提升客单价', '促销活动设置', '竞品分析报告']
    },
    daily: {
        question: '今天的推荐搭配是什么？有什么新品吗？',
        answer: `<p><strong>今日推荐搭配</strong></p>
            <div style="background:var(--bg-elevated);padding:10px;border-radius:8px;margin:8px 0;font-size:12px;">
                <p>招牌组合：杨枝甘露 + 芒果麻薯 = ¥28（省¥5）</p>
                <p>清爽推荐：冰柠檬美式 + 轻食沙拉 = ¥32（省¥6）</p>
                <p>新品上市：<strong>桂花乌龙奶盖</strong> 限时尝鲜价 ¥16</p>
            </div>
            <p class="tip">${SVG_ICONS.bulb} 新品上线首周，搭配小程序分享可获买一赠一券。</p>`,
        related: ['会员积分规则', '过敏原信息', '热量查询']
    },
    training: {
        question: '新员工如何快速学会制作标准饮品？',
        answer: `<p><strong>新员工饮品培训路径（7天计划）：</strong></p>
            <ol><li><strong>Day 1-2：</strong>基础操作 — 设备使用、原料识别</li><li><strong>Day 3-4：</strong>核心品类 — 10款经典饮品制作</li><li><strong>Day 5-6：</strong>进阶技能 — 拉花、糖度调整、出品速度</li><li><strong>Day 7：</strong>考核认证 — AI视觉+口味双重考核</li></ol>
            <p class="tip">${SVG_ICONS.bulb} 已为新员工生成个性化培训计划，可在AI培训助手中查看进度。</p>`,
        related: ['查看培训视频', '考核标准', '晋升路径']
    },
    complaint: {
        question: '顾客反映饮品口味与之前不一致，如何处理？',
        answer: `<p><strong>口味投诉标准处理流程：</strong></p>
            <ol><li>立即致歉并记录具体问题</li><li>提供免费重做或退款</li><li>排查原因：原料批次/设备校准/人员操作</li><li>48小时内回访确认满意度</li></ol>
            <div style="background:rgba(248,81,73,0.1);padding:10px;border-radius:8px;margin:8px 0;font-size:12px;">
                <p>${SVG_ICONS.warning} AI检测提示：该门店本周口味投诉已达3次，建议安排品控专员现场巡检。</p>
            </div>
            <p class="tip">${SVG_ICONS.bulb} 已自动生成工单派发至区域品控主管，预计明日上午处理。</p>`,
        related: ['查看投诉统计', '品控标准手册', '客户补偿方案']
    }
};

const FRANCHISE_CONVERSATIONS = [
    {
        question: '我想在杭州开一家加盟店，需要多少投资？',
        answer: `<p>感谢您对我们品牌的关注！杭州地区加盟投资参考：</p>
            <div class="invest-table">
                <div class="invest-row"><span class="invest-item">加盟费</span><span class="invest-value">¥11,000</span></div>
                <div class="invest-row"><span class="invest-item">设备费用</span><span class="invest-value">¥80,000-120,000</span></div>
                <div class="invest-row"><span class="invest-item">首批物料</span><span class="invest-value">¥15,000-25,000</span></div>
                <div class="invest-row"><span class="invest-item">装修费用</span><span class="invest-value">¥50,000-80,000</span></div>
                <div class="invest-row total"><span class="invest-item">预计总投资</span><span class="invest-value">¥156,000-236,000</span></div>
            </div>
            <p class="tip">${SVG_ICONS.bulb} 根据您的位置，推荐了3个高潜力选址区域，预计回本周期8-12个月</p>`,
        related: ['加盟流程详情', '区域保护政策', '融资方案']
    },
    {
        question: '加盟后总部提供哪些支持？',
        answer: `<p><strong>总部全方位支持体系：</strong></p>
            <ol><li><strong>选址支持：</strong>AI大数据选址模型，预测营业额准确率92%</li><li><strong>装修支持：</strong>统一设计方案+驻店施工指导</li><li><strong>培训支持：</strong>15天系统培训+AI持续辅导</li><li><strong>运营支持：</strong>首月驻店运营经理+月度经营分析</li><li><strong>供应链：</strong>中央工厂统一配送，隔日达覆盖全国</li></ol>
            <p class="tip">${SVG_ICONS.bulb} 新加盟商首3个月享受额外运营帮扶计划，确保顺利度过开业期。</p>`,
        related: ['培训内容详情', '供应链配送范围', '运营帮扶案例']
    },
    {
        question: '我在三线城市开店，盈利前景如何？',
        answer: `<p><strong>三线城市盈利模型测算：</strong></p>
            <div class="invest-table">
                <div class="invest-row"><span class="invest-item">日均客流（预估）</span><span class="invest-value">180-250人</span></div>
                <div class="invest-row"><span class="invest-item">客单价（均值）</span><span class="invest-value">¥18-22</span></div>
                <div class="invest-row"><span class="invest-item">月均营收</span><span class="invest-value">¥108,000-165,000</span></div>
                <div class="invest-row"><span class="invest-item">毛利率</span><span class="invest-value">65%-70%</span></div>
                <div class="invest-row total"><span class="invest-item">月均净利润</span><span class="invest-value">¥25,000-42,000</span></div>
            </div>
            <p class="tip">${SVG_ICONS.bulb} 基于AI分析256家同级别城市门店数据，回本周期预计6-10个月，成功率87%。</p>`,
        related: ['查看同城案例', '淡旺季分析', '成本优化建议']
    },
    {
        question: '加盟需要满足什么条件？审核流程是怎样的？',
        answer: `<p><strong>加盟资质要求：</strong></p>
            <ol><li>年龄22-50岁，具备完全民事行为能力</li><li>认同品牌理念，愿意全职经营</li><li>具备15-25万启动资金证明</li><li>无食品安全相关不良记录</li></ol>
            <p><strong>审核流程（AI加速）：</strong></p>
            <div style="background:var(--bg-elevated);padding:10px;border-radius:8px;margin:8px 0;font-size:12px;">
                <p>① 在线提交资料 → ② AI资质预审(2小时) → ③ 视频面谈 → ④ 签约</p>
                <p style="margin-top:6px;">全流程最快 <strong>3个工作日</strong> 完成</p>
            </div>
            <p class="tip">${SVG_ICONS.bulb} 您可以现在就上传资料，AI预审系统2小时内反馈结果。</p>`,
        related: ['上传资质材料', '常见审核问题', '合同条款说明']
    }
];

const SERVICE_TAB_ORDER = ['policy', 'delivery', 'operation', 'daily', 'training', 'complaint'];
let serviceTabIndex = 0;
let franchiseConvoIndex = 0;

// =========================================
// 状态管理
// =========================================
const state = {
    currentPage: 'landing', // landing, store, people, factory
    currentAgent: {
        store: 'inspection',
        people: 'service',
        factory: 'material'  // 默认先进入物料预测Agent
    },
    currentScene: 'bar',
    currentSceneIndex: 0,
    isAutoPlaying: true,
    demoRunning: false
};

const CONFIG = {
    inspectionSceneOrder: ['bar', 'equipment', 'staff', 'store', 'wash']
};

// =========================================
// 初始化
// =========================================
function init() {
    bindNavigation();
    bindAgentTabs();
    bindSceneItems();
    bindChatBI();
    bindControlButtons();
    bindFactoryEvents();
    bindInspectionModal();
    animateLandingMetrics();
    addSVGDefs();
}

// =========================================
// 页面导航
// =========================================
function bindNavigation() {
    // 矩阵节点点击
    document.querySelectorAll('.matrix-card').forEach(node => {
        node.addEventListener('click', () => {
            const target = node.dataset.target;
            navigateToPage(target);
        });
    });

    // 返回按钮
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateToPage('landing');
        });
    });
}

function navigateToPage(pageName) {
    // 隐藏所有页面
    document.getElementById('landingPage').style.display = 'none';
    document.querySelectorAll('.module-page').forEach(page => {
        page.classList.remove('active');
    });

    state.currentPage = pageName;

    if (pageName === 'landing') {
        document.getElementById('landingPage').style.display = 'flex';
        state.isAutoPlaying = false;
        state.demoRunning = false;
    } else {
        const pageId = pageName + 'Page';
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
            // 启动该页面的演示
            startPageDemo(pageName);
        }
    }
}

function startPageDemo(pageName) {
    state.isAutoPlaying = true;
    state.demoRunning = false;

    switch (pageName) {
        case 'store':
            // 根据当前选中的agent启动演示
            if (state.currentAgent.store === 'inspection') {
                // 先重置再启动
                resetInspectionUI();
                setTimeout(() => {
                    runInspectionDemo();
                }, 500);
            } else {
                runChatBIDemo();
            }
            break;
        case 'people':
            // 人员页面的演示 - 客服+加盟对话轮播
            runPeopleDemo();
            break;
        case 'factory':
            // 工厂页面演示 - 先物料预测，再供应链优化
            runFactoryDemo();
            break;
    }
}

// =========================================
// Agent标签页切换
// =========================================
function bindAgentTabs() {
    document.querySelectorAll('.agent-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const agent = tab.dataset.agent;
            const tabsContainer = tab.closest('.agent-tabs');
            const page = tab.closest('.module-page');

            // 更新标签激活状态
            tabsContainer.querySelectorAll('.agent-tab').forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');

            // 更新内容区域
            page.querySelectorAll('.agent-content').forEach(content => {
                content.classList.remove('active');
            });
            const targetContent = page.querySelector(`#agent-${agent}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // 更新状态
            const pageType = page.id.replace('Page', '');
            state.currentAgent[pageType] = agent;

            // 启动对应的演示
            if (pageType === 'store') {
                state.demoRunning = false;
                if (agent === 'inspection') {
                    resetInspectionUI();
                    setTimeout(() => {
                        runInspectionDemo();
                    }, 500);
                } else if (agent === 'business') {
                    runChatBIDemo();
                }
            } else if (pageType === 'factory') {
                state.demoRunning = false;
                if (agent === 'material') {
                    resetMaterialUI();
                    setTimeout(() => {
                        runMaterialDemo();
                    }, 500);
                } else if (agent === 'supplychain') {
                    resetSupplyChainUI();
                    setTimeout(() => {
                        runSupplyChainDemo();
                    }, 500);
                }
            } else if (pageType === 'people') {
                state.demoRunning = false;
                runPeopleDemo();
            }
        });
    });
}

// =========================================
// 场景选择
// =========================================
function bindSceneItems() {
    document.querySelectorAll('.scene-item').forEach(item => {
        item.addEventListener('click', () => {
            const scene = item.dataset.scene;
            selectScene(scene);
            state.demoRunning = false;
            // 先重置UI，再启动演示
            resetInspectionUI();
            setTimeout(() => {
                runInspectionDemo();
            }, 300);
        });
    });
}

function selectScene(scene) {
    state.currentScene = scene;
    state.currentSceneIndex = CONFIG.inspectionSceneOrder.indexOf(scene);

    document.querySelectorAll('.scene-item').forEach(item => {
        item.classList.toggle('active', item.dataset.scene === scene);
    });
}

// =========================================
// 智能巡检演示
// =========================================
async function runInspectionDemo() {
    if (state.demoRunning) return;
    state.demoRunning = true;

    const config = SCENE_CONFIG[state.currentScene];

    // 严格从空状态开始
    resetInspectionUI();

    // 等待一下让用户看到空状态
    await sleep(1500);
    if (!state.demoRunning) return;

    // 阶段1: 上传
    await runUploadPhase(config);
    if (!state.demoRunning) return;

    // 阶段2: AI分析
    await runAnalysisPhase(config);
    if (!state.demoRunning) return;

    // 阶段3: 显示结果
    await runResultPhase(config);

    // 自动切换到下一个场景
    if (state.isAutoPlaying && state.currentPage === 'store' && state.currentAgent.store === 'inspection') {
        await sleep(6500);  // 等待弹窗倒计时关闭(5s) + 缓冲
        if (state.isAutoPlaying && state.demoRunning) {
            nextInspectionScene();
        }
    }
}

function resetInspectionUI() {
    const page = document.getElementById('storePage');
    if (!page) return;

    // 重置流程步骤
    page.querySelectorAll('.workflow-steps .step').forEach(step => {
        step.classList.remove('active', 'completed');
        step.querySelector('.step-status').textContent = '';
    });

    // 显示上传阶段
    const uploadPhase = page.querySelector('#uploadPhase');
    const analysisPhase = page.querySelector('#analysisPhase');
    const resultPhase = page.querySelector('#resultPhase');

    if (uploadPhase) uploadPhase.style.display = 'flex';
    if (analysisPhase) analysisPhase.style.display = 'none';
    if (resultPhase) resultPhase.style.display = 'none';

    // 重置上传UI
    const uploadArea = page.querySelector('#uploadArea');
    const uploadingAnim = page.querySelector('#uploadingAnim');
    if (uploadArea) uploadArea.style.display = 'block';
    if (uploadingAnim) uploadingAnim.style.display = 'none';

    // 重置结果区
    const resultWaiting = page.querySelector('#resultWaiting');
    const resultContent = page.querySelector('#resultContent');
    const jsonOutput = page.querySelector('#jsonOutput');
    const jsonContent = page.querySelector('#jsonContent');

    if (resultWaiting) resultWaiting.style.display = 'block';
    if (resultContent) resultContent.style.display = 'none';
    if (jsonOutput) jsonOutput.style.opacity = '0.3';
    if (jsonContent) {
        jsonContent.textContent = JSON.stringify({
            is_scene: null,
            status: null,
            desc: '',
            confidence: null
        }, null, 2);
    }
}

async function runUploadPhase(config) {
    const page = document.getElementById('storePage');
    setStepActive(page, 1);

    await sleep(800);

    const uploadArea = page.querySelector('#uploadArea');
    if (uploadArea) {
        uploadArea.classList.add('dragover');
        await sleep(1200);
        uploadArea.classList.remove('dragover');
        uploadArea.style.display = 'none';
    }

    const uploadingAnim = page.querySelector('#uploadingAnim');
    if (uploadingAnim) {
        uploadingAnim.style.display = 'block';
        await animateUploadProgress(page, config.name);
    }

    await sleep(500);
    setStepCompleted(page, 1);
}

async function animateUploadProgress(page, filename) {
    const progressRing = page.querySelector('#uploadProgressRing');
    const percentText = page.querySelector('#uploadPercent');
    const filenameText = page.querySelector('#uploadFilename');

    if (filenameText) filenameText.textContent = `正在上传: ${filename}.jpg`;

    const circumference = 2 * Math.PI * 45;
    if (progressRing) {
        progressRing.style.strokeDasharray = circumference;

        for (let i = 0; i <= 100; i += 4) {
            if (!state.demoRunning) return;
            progressRing.style.strokeDashoffset = circumference - (i / 100) * circumference;
            if (percentText) percentText.textContent = `${i}%`;
            await sleep(50);
        }
    }

    if (filenameText) filenameText.textContent = '上传完成!';
    await sleep(600);
}

async function runAnalysisPhase(config) {
    const page = document.getElementById('storePage');
    setStepActive(page, 2);

    const uploadPhase = page.querySelector('#uploadPhase');
    const analysisPhase = page.querySelector('#analysisPhase');

    if (uploadPhase) uploadPhase.style.display = 'none';
    if (analysisPhase) analysisPhase.style.display = 'block';

    const analyzeImage = page.querySelector('#analyzeImage');
    if (analyzeImage) analyzeImage.src = config.image;

    // 等待图片加载显示
    await sleep(800);

    const analysisFill = page.querySelector('#analysisFill');
    const analysisText = page.querySelector('#analysisText');
    const steps = config.analysisSteps;
    const stepPercent = 100 / steps.length;

    for (let i = 0; i < steps.length; i++) {
        if (!state.demoRunning) return;
        if (analysisText) analysisText.textContent = steps[i];

        for (let j = 0; j < 10; j++) {
            if (!state.demoRunning) return;
            if (analysisFill) {
                analysisFill.style.width = `${(i * stepPercent) + (j * stepPercent / 10)}%`;
            }
            await sleep(80);  // 从40ms改为80ms
        }
    }

    if (analysisFill) analysisFill.style.width = '100%';
    if (analysisText) analysisText.textContent = '分析完成!';

    await sleep(800);
    setStepCompleted(page, 2);
}

async function runResultPhase(config) {
    const page = document.getElementById('storePage');
    setStepActive(page, 3);

    const analysisPhase = page.querySelector('#analysisPhase');
    const resultPhase = page.querySelector('#resultPhase');

    if (analysisPhase) analysisPhase.style.display = 'none';
    if (resultPhase) resultPhase.style.display = 'block';

    const resultImage = page.querySelector('#resultImage');
    if (resultImage) resultImage.src = config.image;

    const storeInfo = page.querySelector('#storeInfo');
    const checkTime = page.querySelector('#checkTime');
    if (storeInfo) storeInfo.textContent = config.store;
    if (checkTime) checkTime.textContent = getCurrentTime();

    // 等待图片显示
    await sleep(600);

    // 生成检测框
    const boxesContainer = page.querySelector('#detectionBoxes');
    if (boxesContainer) {
        boxesContainer.innerHTML = '';
        for (let i = 0; i < config.detections.length; i++) {
            if (!state.demoRunning) return;
            const det = config.detections[i];
            const box = document.createElement('div');
            box.className = `detection-box ${det.pass ? '' : 'fail'}`;
            box.style.cssText = `top: ${det.top}; left: ${det.left}; width: ${det.width}; height: ${det.height}; animation-delay: ${i * 0.2}s;`;
            box.innerHTML = `<span class="detection-label">${det.label}</span>`;
            boxesContainer.appendChild(box);
            await sleep(400);  // 从250ms改为400ms
        }
    }

    await sleep(600);
    showResultCard(page, config);
    await sleep(400);
    updateJsonOutput(page, config.result);
    setStepCompleted(page, 3);

    // 弹出结果弹窗
    await sleep(300);
    showInspectionModal(config);
}

function showResultCard(page, config) {
    const resultWaiting = page.querySelector('#resultWaiting');
    const resultContent = page.querySelector('#resultContent');
    const resultStatus = page.querySelector('#resultStatus');
    const resultCard = page.querySelector('#resultCard');

    if (resultWaiting) resultWaiting.style.display = 'none';
    if (resultContent) resultContent.style.display = 'block';

    const isPass = config.status === 'pass';

    if (resultStatus) {
        resultStatus.innerHTML = `
            <span class="status-icon">${isPass ? '✓' : '✗'}</span>
            <span class="status-text">${isPass ? '检查通过' : '检查不通过'}</span>
        `;
        resultStatus.className = `result-status ${isPass ? 'success' : 'fail'}`;
    }

    if (resultCard) {
        resultCard.className = `result-card ${isPass ? 'success' : 'fail'}`;
    }

    const detailsContainer = page.querySelector('#resultDetails');
    if (detailsContainer) {
        detailsContainer.innerHTML = config.result.details.map(d => `
            <div class="detail-item">
                <span class="detail-label">${d.label}</span>
                <span class="detail-value ${d.pass ? 'pass' : 'fail'}">${d.value}</span>
            </div>
        `).join('');
    }
}

function updateJsonOutput(page, result) {
    const jsonOutput = page.querySelector('#jsonOutput');
    const jsonContent = page.querySelector('#jsonContent');

    if (jsonOutput) jsonOutput.style.opacity = '1';
    if (jsonContent) jsonContent.textContent = JSON.stringify(result, null, 2);
}

// =========================================
// 巡检结果弹窗
// =========================================
let modalCountdownTimer = null;

function bindInspectionModal() {
    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeInspectionModal);
    }

    const overlay = document.getElementById('inspectionModal');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeInspectionModal();
        });
    }
}

function showInspectionModal(config) {
    const modal = document.getElementById('inspectionModal');
    if (!modal) return;

    const isPass = config.status === 'pass';

    // 更新状态
    const modalStatus = document.getElementById('modalStatus');
    if (modalStatus) {
        modalStatus.className = `modal-status ${isPass ? 'success' : 'fail'}`;
        modalStatus.innerHTML = `
            <span class="status-icon">${isPass ? '✓' : '✗'}</span>
            <span class="status-text">${isPass ? '检查通过' : '检查不通过'}</span>
        `;
    }

    // 更新详情
    const modalDetails = document.getElementById('modalDetails');
    if (modalDetails) {
        modalDetails.innerHTML = config.result.details.map(d => `
            <div class="detail-item">
                <span class="detail-label">${d.label}</span>
                <span class="detail-value ${d.pass ? 'pass' : 'fail'}">${d.value}</span>
            </div>
        `).join('');
    }

    // 更新JSON
    const modalJson = document.getElementById('modalJsonContent');
    if (modalJson) {
        modalJson.textContent = JSON.stringify(config.result, null, 2);
    }

    // 显示弹窗
    modal.classList.add('active');

    // 倒计时自动关闭
    let countdown = 5;
    const countdownNum = document.getElementById('countdownNum');
    if (countdownNum) countdownNum.textContent = countdown;

    if (modalCountdownTimer) clearInterval(modalCountdownTimer);
    modalCountdownTimer = setInterval(() => {
        countdown--;
        if (countdownNum) countdownNum.textContent = countdown;
        if (countdown <= 0) {
            closeInspectionModal();
        }
    }, 1000);
}

function closeInspectionModal() {
    const modal = document.getElementById('inspectionModal');
    if (modal) modal.classList.remove('active');
    if (modalCountdownTimer) {
        clearInterval(modalCountdownTimer);
        modalCountdownTimer = null;
    }
}

function setStepActive(page, stepNum) {
    page.querySelectorAll('.workflow-steps .step').forEach(step => {
        if (parseInt(step.dataset.step) === stepNum) {
            step.classList.add('active');
            step.classList.remove('completed');
        }
    });
}

function setStepCompleted(page, stepNum) {
    page.querySelectorAll('.workflow-steps .step').forEach(step => {
        if (parseInt(step.dataset.step) === stepNum) {
            step.classList.remove('active');
            step.classList.add('completed');
            step.querySelector('.step-status').textContent = '✓';
        }
    });
}

function nextInspectionScene() {
    state.currentSceneIndex = (state.currentSceneIndex + 1) % CONFIG.inspectionSceneOrder.length;
    const nextScene = CONFIG.inspectionSceneOrder[state.currentSceneIndex];
    selectScene(nextScene);
    state.demoRunning = false;
    // 严格从空状态开始下一个场景
    resetInspectionUI();
    setTimeout(() => {
        runInspectionDemo();
    }, 500);
}

// =========================================
// ChatBI演示
// =========================================
function bindChatBI() {
    // 场景标签
    document.querySelectorAll('.scenario-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const scenario = tab.dataset.scenario;
            setScenarioTab(scenario);
        });
    });

    // 快捷问题
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.dataset.question;
            simulateChatBIQuestion(question);
        });
    });

    // 发送按钮
    const sendBtn = document.getElementById('sendBtn');
    const chatInput = document.getElementById('chatInput');
    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', () => {
            const question = chatInput.value.trim();
            if (question) {
                simulateChatBIQuestion(question);
                chatInput.value = '';
            }
        });

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });
    }
}

function setScenarioTab(scenario) {
    document.querySelectorAll('.scenario-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.scenario === scenario);
    });
    updateQuickQuestions(scenario);
}

function updateQuickQuestions(scenario) {
    const quickQuestionsMap = {
        sales: [
            { text: '销售预警', question: '哪些门店本周销售下滑需要关注？' },
            { text: '品类分析', question: '哪个品类最近销量增长最快？' },
            { text: '时段分析', question: '门店的销售高峰时段是什么时候？' }
        ],
        supply: [
            { text: '库存预警', question: '哪些物料库存即将告警？' },
            { text: '物料预测', question: '预测明天各门店的柠檬需求量，给出补货建议' },
            { text: '损耗分析', question: '本周物料损耗情况如何？' }
        ],
        efficiency: [
            { text: '人效分析', question: '分析华东区门店的人效情况，如何优化排班？' },
            { text: '排班建议', question: '高峰期如何优化排班？' },
            { text: '培训需求', question: '哪些门店新员工需要重点培训？' }
        ],
        diagnosis: [
            { text: '异常检测', question: '最近有哪些经营异常需要关注？' },
            { text: '改进建议', question: '给出本周经营改进建议' },
            { text: '对标分析', question: '与同区域标杆门店对比差距' }
        ]
    };

    const container = document.getElementById('quickQuestions');
    if (!container) return;

    const questions = quickQuestionsMap[scenario] || quickQuestionsMap.sales;
    container.innerHTML = questions.map(q =>
        `<span class="quick-btn" data-question="${q.question}">${q.text}</span>`
    ).join('');

    container.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            simulateChatBIQuestion(btn.dataset.question);
        });
    });
}

async function runChatBIDemo() {
    resetChatBI();

    const scenarios = [
        { question: '哪些门店本周销售下滑需要关注？', scenario: 'sales' },
        { question: '预测明天各门店的柠檬需求量，给出补货建议', scenario: 'supply' },
        { question: '分析华东区门店的人效情况，如何优化排班？', scenario: 'efficiency' }
    ];

    for (let i = 0; i < scenarios.length; i++) {
        if (!state.isAutoPlaying || state.currentPage !== 'store' || state.currentAgent.store !== 'business') break;

        await sleep(2000);
        setScenarioTab(scenarios[i].scenario);
        await sleep(500);
        await simulateChatBIQuestion(scenarios[i].question);
        await sleep(5000);
    }

    if (state.isAutoPlaying && state.currentPage === 'store' && state.currentAgent.store === 'business') {
        resetChatBI();
        runChatBIDemo();
    }
}

function resetChatBI() {
    const messagesContainer = document.getElementById('chatMessages');
    if (!messagesContainer) return;

    messagesContainer.innerHTML = `
        <div class="message bot">
            <div class="message-avatar">${SVG_ICONS.bot}</div>
            <div class="message-content">
                您好！我是经营助手Agent。我可以帮您：<br>
                • 分析销售数据，发现增长机会<br>
                • 优化物料配送，降低损耗成本<br>
                • 提升人效，优化排班方案<br>
                请问有什么需要分析的？
            </div>
        </div>
    `;

    const chartContainer = document.getElementById('chartContainer');
    if (chartContainer) {
        chartContainer.innerHTML = `
            <div class="chart-placeholder">
                <div class="chart-icon">${SVG_ICONS.chart}</div>
                <span>选择问题查看数据可视化</span>
            </div>
        `;
    }
}

async function simulateChatBIQuestion(question) {
    const messagesContainer = document.getElementById('chatMessages');
    if (!messagesContainer) return;

    // 用户消息
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.innerHTML = `
        <div class="message-avatar">${SVG_ICONS.user}</div>
        <div class="message-content">${question}</div>
    `;
    messagesContainer.appendChild(userMsg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // 思考中
    const thinkingMsg = document.createElement('div');
    thinkingMsg.className = 'message bot thinking';
    thinkingMsg.innerHTML = `
        <div class="message-avatar">${SVG_ICONS.bot}</div>
        <div class="message-content">
            <div class="typing-indicator"><span></span><span></span><span></span></div>
            <span style="color: var(--text-secondary); font-size: 11px;">正在分析数据...</span>
        </div>
    `;
    messagesContainer.appendChild(thinkingMsg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    await sleep(1500);
    thinkingMsg.remove();

    const config = CHATBI_RESPONSES[question] || getDefaultResponse(question);

    // AI响应
    const botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    botMsg.innerHTML = `
        <div class="message-avatar">${SVG_ICONS.bot}</div>
        <div class="message-content">${config.response}</div>
    `;
    messagesContainer.appendChild(botMsg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    showChatBIChart(config.chart);
    if (config.insight) {
        updateInsightCard(config.insight);
    }
}

function getDefaultResponse(question) {
    return {
        response: `<p>正在为您分析「${question}」...</p>
            <p style="margin-top: 8px; font-size: 12px;">已检索相关数据 <strong>12,450</strong> 条</p>
            <p style="color: var(--accent-blue); margin-top: 8px; font-size: 12px;">${SVG_ICONS.bulb} 分析完成，请查看右侧可视化结果</p>`,
        chart: 'default',
        insight: { type: 'highlight', icon: SVG_ICONS.barchart, title: 'AI分析', text: '数据分析完成，已生成可视化报告' }
    };
}

function showChatBIChart(chartType) {
    const chartContainer = document.getElementById('chartContainer');
    const chartTitle = document.getElementById('chartTitle');
    if (!chartContainer) return;

    addChartStyles();

    const charts = {
        salesWarning: {
            title: '门店销售趋势对比',
            html: `
                <div class="chart-content">
                    <div class="line-chart">
                        <div class="chart-lines">
                            <div class="line-group"><span class="line-label">杭州西湖</span><div class="line-track"><div class="line-fill warning" style="--progress: 65%;"></div></div><span class="line-value warning">↓18.2%</span></div>
                            <div class="line-group"><span class="line-label">苏州观前</span><div class="line-track"><div class="line-fill warning" style="--progress: 70%;"></div></div><span class="line-value warning">↓16.5%</span></div>
                            <div class="line-group"><span class="line-label">南京新街口</span><div class="line-track"><div class="line-fill warning" style="--progress: 72%;"></div></div><span class="line-value warning">↓15.8%</span></div>
                            <div class="line-group"><span class="line-label">上海静安</span><div class="line-track"><div class="line-fill success" style="--progress: 95%;"></div></div><span class="line-value success">↑8.3%</span></div>
                            <div class="line-group"><span class="line-label">无锡中心</span><div class="line-track"><div class="line-fill success" style="--progress: 88%;"></div></div><span class="line-value success">↑5.1%</span></div>
                        </div>
                    </div>
                </div>`
        },
        supplyForecast: {
            title: '物料需求预测 vs 库存',
            html: `
                <div class="chart-content">
                    <div class="supply-chart">
                        <div class="supply-visual">
                            <div class="supply-bar"><div class="bar-segment demand" style="height: 85%;"><span class="segment-label">需求 2,850kg</span></div></div>
                            <div class="supply-bar"><div class="bar-segment stock" style="height: 57%;"><span class="segment-label">库存 1,920kg</span></div></div>
                            <div class="supply-bar"><div class="bar-segment gap" style="height: 28%;"><span class="segment-label">缺口 930kg</span></div></div>
                        </div>
                        <div class="supply-timeline">
                            <div class="timeline-item"><span class="time">16:00</span><span class="event">下单补货</span></div>
                            <div class="timeline-item"><span class="time">22:00</span><span class="event">仓库发货</span></div>
                            <div class="timeline-item active"><span class="time">08:00</span><span class="event">门店到货</span></div>
                        </div>
                    </div>
                </div>`
        },
        efficiency: {
            title: '门店人效分布',
            html: `
                <div class="chart-content">
                    <div class="efficiency-chart">
                        <div class="eff-distribution">
                            <div class="eff-zone high"><span class="zone-label">高效区</span><span class="zone-range">>20杯/人时</span><span class="zone-count">8家</span></div>
                            <div class="eff-zone normal"><span class="zone-label">达标区</span><span class="zone-range">16-20杯/人时</span><span class="zone-count">18家</span></div>
                            <div class="eff-zone low"><span class="zone-label">待改进</span><span class="zone-range"><16杯/人时</span><span class="zone-count">6家</span></div>
                        </div>
                        <div class="eff-suggestion">
                            <div class="suggest-item"><span class="suggest-icon">${SVG_ICONS.clock}</span><span class="suggest-text">高峰+2人</span></div>
                            <div class="suggest-item"><span class="suggest-icon">${SVG_ICONS.trendDown}</span><span class="suggest-text">低谷-1人</span></div>
                            <div class="suggest-item highlight"><span class="suggest-icon">${SVG_ICONS.coin}</span><span class="suggest-text">月省¥28K</span></div>
                        </div>
                    </div>
                </div>`
        },
        default: {
            title: '数据分析结果',
            html: `
                <div class="chart-bars">
                    <div class="bar-group"><div class="bar" style="height: 89%; background: linear-gradient(180deg, var(--accent-blue), #2a5299);"></div><span class="bar-label">华东</span></div>
                    <div class="bar-group"><div class="bar" style="height: 75%; background: linear-gradient(180deg, var(--accent-purple), #6b45a3);"></div><span class="bar-label">华南</span></div>
                    <div class="bar-group"><div class="bar" style="height: 63%; background: linear-gradient(180deg, var(--accent-green), #2a8a4a);"></div><span class="bar-label">华北</span></div>
                    <div class="bar-group"><div class="bar" style="height: 48%; background: linear-gradient(180deg, var(--accent-orange), #a67818);"></div><span class="bar-label">西南</span></div>
                </div>`
        }
    };

    const chart = charts[chartType] || charts.default;
    if (chartTitle) chartTitle.textContent = chart.title;
    chartContainer.innerHTML = chart.html;
}

function updateInsightCard(insight) {
    const container = document.getElementById('insightCards');
    if (!container) return;

    const firstCard = container.querySelector('.insight-card');
    if (firstCard) {
        firstCard.className = `insight-card ${insight.type}`;
        firstCard.innerHTML = `
            <div class="insight-icon">${insight.icon}</div>
            <div class="insight-content">
                <span class="insight-title">${insight.title}</span>
                <span class="insight-text">${insight.text}</span>
            </div>
        `;
    }
}

function addChartStyles() {
    if (document.getElementById('chart-styles')) return;

    const style = document.createElement('style');
    style.id = 'chart-styles';
    style.textContent = `
        .chart-content { width: 100%; height: 100%; padding: 16px; }
        .chart-bars { display: flex; justify-content: space-around; align-items: flex-end; height: 100%; padding: 20px; }
        .bar-group { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
        .bar { width: 60%; border-radius: 6px 6px 0 0; animation: barGrow 0.6s ease-out forwards; transform-origin: bottom; }
        @keyframes barGrow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .bar-label { font-size: 11px; color: var(--text-secondary); }
        .typing-indicator { display: flex; gap: 4px; margin-bottom: 6px; }
        .typing-indicator span { width: 7px; height: 7px; background: var(--accent-blue); border-radius: 50%; animation: typingDot 1s ease-in-out infinite; }
        .typing-indicator span:nth-child(2) { animation-delay: 0.15s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes typingDot { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1); } }
        .line-chart { height: 100%; }
        .chart-lines { display: flex; flex-direction: column; gap: 10px; height: 100%; justify-content: center; }
        .line-group { display: flex; align-items: center; gap: 10px; }
        .line-label { width: 75px; font-size: 11px; color: var(--text-secondary); text-align: right; }
        .line-track { flex: 1; height: 7px; background: var(--bg-card); border-radius: 4px; overflow: hidden; }
        .line-fill { height: 100%; width: var(--progress); border-radius: 4px; animation: fillGrow 0.8s ease-out forwards; }
        .line-fill.warning { background: linear-gradient(90deg, var(--accent-red), var(--accent-orange)); }
        .line-fill.success { background: linear-gradient(90deg, var(--accent-green), #4ade80); }
        @keyframes fillGrow { from { width: 0; } to { width: var(--progress); } }
        .line-value { width: 55px; font-size: 11px; font-weight: 600; }
        .line-value.warning { color: var(--accent-red); }
        .line-value.success { color: var(--accent-green); }
        .supply-chart { display: flex; height: 100%; gap: 20px; }
        .supply-visual { flex: 1; display: flex; justify-content: space-around; align-items: flex-end; padding: 12px 0; }
        .supply-bar { width: 70px; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; }
        .bar-segment { border-radius: 6px 6px 0 0; display: flex; align-items: center; justify-content: center; animation: barGrow 0.6s ease-out forwards; transform-origin: bottom; }
        .bar-segment.demand { background: linear-gradient(180deg, var(--accent-blue), #2a5299); }
        .bar-segment.stock { background: linear-gradient(180deg, var(--accent-green), #2a8a4a); }
        .bar-segment.gap { background: linear-gradient(180deg, var(--accent-red), #b93a3a); }
        .segment-label { font-size: 9px; color: white; text-align: center; writing-mode: vertical-lr; transform: rotate(180deg); }
        .supply-timeline { width: 100px; display: flex; flex-direction: column; justify-content: center; gap: 14px; padding-left: 14px; border-left: 2px solid var(--border-color); }
        .timeline-item { display: flex; flex-direction: column; gap: 2px; position: relative; padding-left: 14px; }
        .timeline-item::before { content: ''; position: absolute; left: -8px; top: 50%; transform: translateY(-50%); width: 10px; height: 10px; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 50%; }
        .timeline-item.active::before { background: var(--accent-green); border-color: var(--accent-green); }
        .timeline-item .time { font-size: 10px; color: var(--text-secondary); }
        .timeline-item .event { font-size: 11px; color: var(--text-primary); }
        .efficiency-chart { display: flex; height: 100%; gap: 20px; }
        .eff-distribution { flex: 1; display: flex; flex-direction: column; gap: 8px; justify-content: center; }
        .eff-zone { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 6px; animation: fadeIn 0.4s ease; }
        .eff-zone.high { background: rgba(63, 185, 80, 0.12); }
        .eff-zone.normal { background: rgba(88, 166, 255, 0.08); }
        .eff-zone.low { background: rgba(248, 81, 73, 0.08); }
        .zone-label { font-size: 12px; font-weight: 600; width: 55px; }
        .eff-zone.high .zone-label { color: var(--accent-green); }
        .eff-zone.normal .zone-label { color: var(--accent-blue); }
        .eff-zone.low .zone-label { color: var(--accent-red); }
        .zone-range { font-size: 10px; color: var(--text-secondary); flex: 1; }
        .zone-count { font-size: 13px; font-weight: 700; color: var(--text-primary); }
        .eff-suggestion { width: 90px; display: flex; flex-direction: column; justify-content: center; gap: 6px; }
        .suggest-item { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 8px; background: var(--bg-card); border-radius: 6px; }
        .suggest-item.highlight { background: rgba(63, 185, 80, 0.12); }
        .suggest-icon { font-size: 16px; }
        .suggest-text { font-size: 10px; color: var(--text-secondary); }
        .suggest-item.highlight .suggest-text { color: var(--accent-green); font-weight: 600; }
    `;
    document.head.appendChild(style);
}

// =========================================
// 控制按钮
// =========================================
function bindControlButtons() {
    // Store页面
    const storeAutoBtn = document.getElementById('storeAutoPlayBtn');
    const storePauseBtn = document.getElementById('storePauseBtn');

    if (storeAutoBtn) {
        storeAutoBtn.addEventListener('click', () => {
            state.isAutoPlaying = true;
            storeAutoBtn.classList.add('active');
            if (storePauseBtn) storePauseBtn.classList.remove('active');
            startPageDemo('store');
        });
    }

    if (storePauseBtn) {
        storePauseBtn.addEventListener('click', () => {
            state.isAutoPlaying = false;
            state.demoRunning = false;
            storePauseBtn.classList.add('active');
            if (storeAutoBtn) storeAutoBtn.classList.remove('active');
        });
    }

    // People页面
    const peopleAutoBtn = document.getElementById('peopleAutoPlayBtn');
    const peoplePauseBtn = document.getElementById('peoplePauseBtn');

    if (peopleAutoBtn) {
        peopleAutoBtn.addEventListener('click', () => {
            state.isAutoPlaying = true;
            peopleAutoBtn.classList.add('active');
            if (peoplePauseBtn) peoplePauseBtn.classList.remove('active');
            startPageDemo('people');
        });
    }

    if (peoplePauseBtn) {
        peoplePauseBtn.addEventListener('click', () => {
            state.isAutoPlaying = false;
            state.demoRunning = false;
            peoplePauseBtn.classList.add('active');
            if (peopleAutoBtn) peopleAutoBtn.classList.remove('active');
        });
    }
}

// =========================================
// 落地页数字动画
// =========================================
function animateLandingMetrics() {
    document.querySelectorAll('.metric-value').forEach(el => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);
            el.textContent = current.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

// =========================================
// 工具函数
// =========================================
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).replace(/\//g, '-');
}

function addSVGDefs() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.width = '0';
    svg.style.height = '0';
    svg.innerHTML = `
        <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#58a6ff"/>
                <stop offset="100%" style="stop-color:#a371f7"/>
            </linearGradient>
        </defs>
    `;
    document.body.insertBefore(svg, document.body.firstChild);
}

// =========================================
// 工厂页面演示
// =========================================

// 物料预测数据配置
const MATERIAL_CONFIG = {
    milk: {
        name: '牛奶',
        demandTotal: '19,230kg',
        priceAvg: '¥11.8/kg',
        priceTrend: '↗ +5%',
        inventoryWarning: '⚠ D4库存低于安全线',
        suggestion: `<strong>市场背景：</strong>2026年Q1原料奶收购价持续走低，行业处于产能调整期，蒙牛等头部企业毛利率创39.9%历史新高，但终端乳制品需求回暖信号明显。<br><br><strong>采购建议：</strong>当前牛奶库存预计<strong>4月1日</strong>跌破安全线(800kg)，建议在<strong>3月31日前</strong>向区域供应商下单补货<strong>1,200kg</strong>。鉴于原料奶价格仍在下行通道，可争取<strong>¥11.2/kg</strong>的批量采购价(较当前降3.6%)，预计节省紧急调货费用<strong>¥3,500</strong>，同时避免缺货导致的销售损失约<strong>¥8,200</strong>。<br><br><strong>风险提示：</strong>清明假期(4/4-4/6)需求预计上浮15%，建议额外预留200kg安全库存。`
    },
    lemon: {
        name: '柠檬',
        demandTotal: '15,680kg',
        priceAvg: '¥8.5/kg',
        priceTrend: '↘ -3%',
        inventoryWarning: '✓ 库存充足',
        suggestion: `<strong>市场背景：</strong>2026年茶饮市场规模超3,600亿元，柠檬茶品类增速15.8%。当前为柠檬应季供应期，四川安岳、云南产区集中上市，鲜果供应量同比增加12%，价格呈季节性走低。<br><br><strong>采购建议：</strong>当前库存充足，价格处于年度低位区间且仍有下探空间。建议<strong>延迟至4月3日</strong>再批量采购，预计届时价格可降至<strong>¥8.0/kg</strong>，单次采购节省<strong>¥2,100</strong>。可同时锁定一批浓缩柠檬汁(保质期长)，以备夏季旺季备货。<br><br><strong>品控提示：</strong>近期部分产区反映降雨偏多，注意验收时关注果皮完整度和含水率。`
    },
    sugar: {
        name: '糖浆',
        demandTotal: '8,450L',
        priceAvg: '¥15.2/L',
        priceTrend: '→ 持平',
        inventoryWarning: '✓ 正常',
        suggestion: `<strong>市场背景：</strong>国内白砂糖现货价维持在5,445元/吨附近，周跌幅仅0.15%，价格波动极小。国内糖产量预计超1,000万吨，供应充足。国际原糖跌破15美分/磅关口，进口成本持续下降。<br><br><strong>采购建议：</strong>糖浆需求稳定，价格平稳运行。建议维持当前采购节奏（每周2批次、每次600L），无需提前囤货。若果糖供应商提供<strong>季度锁价合同</strong>，可考虑签约，当前价格处于近两年中低位区间，锁价风险较低。<br><br><strong>替代方案：</strong>可评估赤藓糖醇替代方案，响应"减糖"趋势，部分门店已试点零卡糖浆SKU。`
    },
    tea: {
        name: '茶叶',
        demandTotal: '3,200kg',
        priceAvg: '¥85/kg',
        priceTrend: '↗ +8%',
        inventoryWarning: '⚠ 价格持续上涨',
        suggestion: `<strong>市场背景：</strong>2026年春茶产季全面开启，各产区明前茶陆续上市。今年春茶价格与去年基本持平，但优质原叶茶(用于茶饮门店)需求增长显著，部分热门产区已出现抢购。自动化加工产线投产助力产能，但短期内对价格抑制有限。<br><br><strong>采购建议：</strong>茶叶价格已连续3周上涨，预计4月中旬达到阶段性高点。强烈建议<strong>立即锁定采购</strong>红茶(滇红/祁红)<strong>500kg</strong>、绿茶<strong>200kg</strong>、乌龙茶<strong>100kg</strong>，锁定当前均价¥85/kg，预计可避免后续涨价损失<strong>¥5,440</strong>。<br><br><strong>供应链建议：</strong>与产地直采合作社建立长期合作关系，绕过中间商环节可降低8-12%采购成本。`
    },
    cup: {
        name: '杯具',
        demandTotal: '125,000个',
        priceAvg: '¥0.35/个',
        priceTrend: '↘ -2%',
        inventoryWarning: '✓ 正常',
        suggestion: `<strong>市场背景：</strong>一次性杯具及包材市场供应充足，PP/PET原料价格稳中有降。环保政策推动下，可降解材料渗透率持续提升，PLA杯具价格较去年下降约15%，逐步接近传统材料成本线。<br><br><strong>采购建议：</strong>当前杯/盖/吸管库存充裕，按现有消耗速度可维持12天。建议保持<strong>每周一次</strong>的补货节奏。如尚未切换可降解材料，建议在下一采购周期试点<strong>PLA冷饮杯</strong>（差价已缩小至¥0.03/个），兼顾成本与品牌ESG形象。<br><br><strong>包装升级：</strong>Q2可考虑联名款杯套设计，配合AIGC营销模块的IP素材产出。`
    },
    ice: {
        name: '冰块',
        demandTotal: '28,500kg',
        priceAvg: '¥2.8/kg',
        priceTrend: '↗ +12%',
        inventoryWarning: '⚠ 旺季价格预警',
        suggestion: `<strong>市场背景：</strong>3月底气温回升明显，冰块需求进入快速爬坡期。近两周采购价已从¥2.5/kg上涨至¥2.8/kg（涨幅12%），预计4月中旬进入旺季后将突破¥3.2/kg。去年同期最高价达¥3.8/kg。制冰产能集中在城郊工业区，配送距离和时效是核心成本变量。<br><br><strong>采购建议：</strong>建议<strong>立即</strong>与2-3家主力制冰厂签订<strong>4-9月旺季供应协议</strong>，锁定均价<strong>¥2.5/kg</strong>（较旺季峰值降34%），6个月累计节省<strong>¥51,300</strong>。同时建议浦东分仓增设<strong>2台储冰柜</strong>（日存量+800kg），缩短配送频次、降低融损率。<br><br><strong>应急预案：</strong>极端高温日应急预留3家备选供应商联系方式，确保日供应量可弹性扩展至35,000kg。`
    }
};

let selectedMaterial = null;

function bindFactoryEvents() {
    // 物料选择
    document.querySelectorAll('.material-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.material-item').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            selectedMaterial = item.dataset.material;
        });
    });

    // 开始预测按钮
    const predictBtn = document.getElementById('startPredictBtn');
    if (predictBtn) {
        predictBtn.addEventListener('click', () => {
            if (selectedMaterial) {
                state.demoRunning = false;
                runMaterialPrediction(selectedMaterial);
            }
        });
    }

    // Factory控制按钮
    const factoryAutoBtn = document.getElementById('factoryAutoPlayBtn');
    const factoryPauseBtn = document.getElementById('factoryPauseBtn');

    if (factoryAutoBtn) {
        factoryAutoBtn.addEventListener('click', () => {
            state.isAutoPlaying = true;
            factoryAutoBtn.classList.add('active');
            if (factoryPauseBtn) factoryPauseBtn.classList.remove('active');
            runFactoryDemo();
        });
    }

    if (factoryPauseBtn) {
        factoryPauseBtn.addEventListener('click', () => {
            state.isAutoPlaying = false;
            state.demoRunning = false;
            factoryPauseBtn.classList.add('active');
            if (factoryAutoBtn) factoryAutoBtn.classList.remove('active');
        });
    }
}

// 工厂页面完整演示流程
async function runFactoryDemo() {
    if (state.demoRunning) return;
    state.demoRunning = true;

    // 确保物料预测Agent是激活状态
    const materialTab = document.querySelector('.agent-tab[data-agent="material"]');
    const supplychainTab = document.querySelector('.agent-tab[data-agent="supplychain"]');

    if (materialTab) {
        materialTab.classList.add('active');
        if (supplychainTab) supplychainTab.classList.remove('active');
    }

    const materialContent = document.getElementById('agent-material');
    const supplychainContent = document.getElementById('agent-supplychain');

    if (materialContent) materialContent.classList.add('active');
    if (supplychainContent) supplychainContent.classList.remove('active');

    state.currentAgent.factory = 'material';

    // 重置物料预测UI
    resetMaterialUI();
    await sleep(1000);

    // 第一阶段：物料预测演示
    await runMaterialDemo();
    if (!state.demoRunning || !state.isAutoPlaying) return;

    // 等待展示结果
    await sleep(4000);
    if (!state.demoRunning || !state.isAutoPlaying) return;

    // 切换到供应链优化Agent
    if (supplychainTab) {
        supplychainTab.classList.add('active');
        if (materialTab) materialTab.classList.remove('active');
    }
    if (supplychainContent) supplychainContent.classList.add('active');
    if (materialContent) materialContent.classList.remove('active');

    state.currentAgent.factory = 'supplychain';

    // 重置供应链UI
    resetSupplyChainUI();
    await sleep(1000);

    // 第二阶段：供应链优化演示
    await runSupplyChainDemo();
    if (!state.demoRunning || !state.isAutoPlaying) return;

    // 等待展示结果
    await sleep(5000);

    // 循环演示
    if (state.isAutoPlaying && state.currentPage === 'factory') {
        runFactoryDemo();
    }
}

// 物料预测演示
async function runMaterialDemo() {
    // 选择牛奶
    const milkItem = document.querySelector('.material-item[data-material="milk"]');
    if (milkItem) {
        document.querySelectorAll('.material-item').forEach(i => i.classList.remove('selected'));
        milkItem.classList.add('selected');
        selectedMaterial = 'milk';
    }

    await sleep(800);
    if (!state.demoRunning) return;

    // 开始预测
    await runMaterialPrediction('milk');
}

// 执行物料预测分析
async function runMaterialPrediction(material) {
    const config = MATERIAL_CONFIG[material];
    if (!config) return;

    const emptyState = document.getElementById('materialEmptyState');
    const analyzingState = document.getElementById('materialAnalyzingState');
    const forecastResult = document.getElementById('materialForecastResult');
    const progressBar = document.getElementById('predictProgressBar');
    const stepsContainer = document.getElementById('predictSteps');

    // 显示分析中状态
    if (emptyState) emptyState.classList.add('hidden');
    if (forecastResult) forecastResult.classList.add('hidden');
    if (analyzingState) analyzingState.classList.remove('hidden');

    // 分析步骤
    const steps = [
        '正在获取历史销售数据...',
        '分析季节性趋势...',
        '计算需求预测模型...',
        '评估价格走势...',
        '模拟库存消耗...',
        '生成优化建议...'
    ];

    // 进度动画
    for (let i = 0; i <= 100; i += 2) {
        if (!state.demoRunning && !state.isAutoPlaying) return;
        if (progressBar) progressBar.style.width = i + '%';

        // 更新步骤
        const stepIndex = Math.floor(i / 100 * steps.length);
        if (stepsContainer && stepIndex < steps.length) {
            stepsContainer.innerHTML = `<div class="step-item">${steps[stepIndex]}</div>`;
        }

        await sleep(40);
    }

    if (!state.demoRunning && !state.isAutoPlaying) return;

    // 显示结果
    if (analyzingState) analyzingState.classList.add('hidden');
    if (forecastResult) forecastResult.classList.remove('hidden');

    // 更新结果数据
    const materialName = document.getElementById('forecastMaterialName');
    const demandTotal = document.getElementById('demandTotal');
    const priceAvg = document.getElementById('priceAvg');
    const inventoryWarning = document.getElementById('inventoryWarning');
    const suggestion = document.getElementById('forecastSuggestion');

    if (materialName) materialName.textContent = config.name;
    if (demandTotal) demandTotal.textContent = config.demandTotal;
    if (priceAvg) priceAvg.innerHTML = `${config.priceAvg} <span class="trend-up">${config.priceTrend}</span>`;
    if (inventoryWarning) inventoryWarning.textContent = config.inventoryWarning;
    if (suggestion) suggestion.innerHTML = config.suggestion;

    // 重新触发SVG动画(通过克隆替换)
    document.querySelectorAll('.forecast-chart-large .chart-canvas').forEach(canvas => {
        const svg = canvas.querySelector('svg');
        if (svg) {
            const clone = svg.cloneNode(true);
            svg.parentNode.replaceChild(clone, svg);
        }
    });
}

// 重置物料预测UI
function resetMaterialUI() {
    const emptyState = document.getElementById('materialEmptyState');
    const analyzingState = document.getElementById('materialAnalyzingState');
    const forecastResult = document.getElementById('materialForecastResult');
    const progressBar = document.getElementById('predictProgressBar');

    if (emptyState) emptyState.classList.remove('hidden');
    if (analyzingState) analyzingState.classList.add('hidden');
    if (forecastResult) forecastResult.classList.add('hidden');
    if (progressBar) progressBar.style.width = '0%';

    // 取消选中
    document.querySelectorAll('.material-item').forEach(i => i.classList.remove('selected'));
    selectedMaterial = null;
}

// =========================================
// 客服+加盟对话轮播演示
// =========================================

// 工具函数：向聊天区追加消息
function appendDemoMessage(container, role, content, animate = true) {
    const msg = document.createElement('div');
    msg.className = `demo-message ${role}${animate ? ' animating' : ''}`;
    const icon = role === 'user' ? SVG_ICONS.user : SVG_ICONS.bot;
    msg.innerHTML = `
        <div class="demo-avatar">${icon}</div>
        <div class="demo-bubble">${content}</div>
    `;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    return msg;
}

// 工具函数：追加打字指示器
function appendTypingIndicator(container) {
    const msg = document.createElement('div');
    msg.className = 'demo-message bot animating';
    msg.innerHTML = `
        <div class="demo-avatar">${SVG_ICONS.bot}</div>
        <div class="demo-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>
    `;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    return msg;
}

// 更新相关问题区
function updateRelatedQuestions(container, items) {
    if (!container) return;
    container.className = 'related-questions animating';
    container.innerHTML = `<span class="related-title">相关问题：</span>` +
        items.map(q => `<span class="related-item">${q}</span>`).join('');
}

// 单次客服对话演示
async function runServiceConversation(tabKey) {
    if (!state.demoRunning) return;

    const convo = SERVICE_CONVERSATIONS[tabKey];
    if (!convo) return;

    // 激活对应tab
    const tabs = document.querySelectorAll('#peoplePage .agent-content.active .service-tab');
    tabs.forEach(t => {
        t.classList.toggle('active', t.dataset.service === tabKey);
    });

    // 获取聊天容器和相关问题容器
    const chatContainer = document.querySelector('#peoplePage .agent-content.active .demo-chat');
    const relatedContainer = document.getElementById('serviceRelatedQuestions');
    if (!chatContainer) return;

    // 清空聊天区
    chatContainer.innerHTML = '';
    if (relatedContainer) relatedContainer.innerHTML = '';

    await sleep(400);
    if (!state.demoRunning) return;

    // 用户消息滑入
    appendDemoMessage(chatContainer, 'user', convo.question);
    await sleep(1000);
    if (!state.demoRunning) return;

    // 打字指示器
    const typing = appendTypingIndicator(chatContainer);
    await sleep(1500);
    if (!state.demoRunning) return;

    // 替换为机器人回复
    typing.remove();
    appendDemoMessage(chatContainer, 'bot', convo.answer);
    await sleep(500);
    if (!state.demoRunning) return;

    // 更新相关问题
    updateRelatedQuestions(relatedContainer, convo.related);

    await sleep(3500);
}

// 单次加盟对话演示
async function runFranchiseConversation(index) {
    if (!state.demoRunning) return;

    const convo = FRANCHISE_CONVERSATIONS[index];
    if (!convo) return;

    const chatContainer = document.getElementById('franchiseDemoChat');
    const relatedContainer = document.getElementById('franchiseRelatedQuestions');
    if (!chatContainer) return;

    // 清空
    chatContainer.innerHTML = '';
    if (relatedContainer) relatedContainer.innerHTML = '';

    await sleep(400);
    if (!state.demoRunning) return;

    // 用户消息
    appendDemoMessage(chatContainer, 'user', convo.question);
    await sleep(1000);
    if (!state.demoRunning) return;

    // 打字指示器
    const typing = appendTypingIndicator(chatContainer);
    await sleep(1500);
    if (!state.demoRunning) return;

    // 机器人回复
    typing.remove();
    appendDemoMessage(chatContainer, 'bot', convo.answer);
    await sleep(500);
    if (!state.demoRunning) return;

    // 相关问题
    updateRelatedQuestions(relatedContainer, convo.related);

    await sleep(3500);
}

// People页面完整演示
async function runPeopleDemo() {
    if (state.demoRunning) return;
    state.demoRunning = true;

    while (state.demoRunning && state.isAutoPlaying) {
        // --- 客服Agent阶段：轮播3个场景 ---
        // 确保切到客服tab
        const serviceTab = document.querySelector('#peoplePage .agent-tab[data-agent="service"]');
        const franchiseTab = document.querySelector('#peoplePage .agent-tab[data-agent="franchise"]');
        if (serviceTab) serviceTab.click();
        await sleep(600);

        for (let i = 0; i < 3 && state.demoRunning; i++) {
            const key = SERVICE_TAB_ORDER[serviceTabIndex % SERVICE_TAB_ORDER.length];
            await runServiceConversation(key);
            serviceTabIndex++;
            if (!state.demoRunning) break;
        }

        if (!state.demoRunning) break;

        // --- 加盟咨询Agent阶段：轮播2个场景 ---
        if (franchiseTab) franchiseTab.click();
        await sleep(600);

        for (let i = 0; i < 2 && state.demoRunning; i++) {
            const idx = franchiseConvoIndex % FRANCHISE_CONVERSATIONS.length;
            await runFranchiseConversation(idx);
            franchiseConvoIndex++;
            if (!state.demoRunning) break;
        }
    }

    state.demoRunning = false;
}

// =========================================
// 供应链风险监控演示
// =========================================

const RISK_TREND_DATA = [18, 22, 19, 25, 31, 23, 20]; // 近7日风险指数
const RISK_TREND_DATES = ['3/23', '3/24', '3/25', '3/26', '3/27', '3/28', '3/29'];

const RISK_EVENTS = [
    {
        phase: 'scan',
        gaugeScore: 23,
        gaugeColor: 'var(--accent-green)',
        gaugeLabel: '低风险',
        gaugeArc: 'M30,100 A70,70 0 0,1 52,68',
        kpis: { supplier: { val: '98%', status: 'normal' }, logistics: { val: '100%', status: 'normal' }, inventory: { val: '正常', status: 'normal' }, quality: { val: 'A+', status: 'normal' } },
        nodes: { factory: 'normal', warehouse: 'normal', delivery: 'normal', store: 'normal' },
        alerts: [],
        timeline: { time: '09:00', text: '全链路扫描启动，系统运行正常', type: 'scanning' }
    },
    {
        phase: 'warning',
        gaugeScore: 47,
        gaugeColor: 'var(--accent-orange)',
        gaugeLabel: '中等风险',
        gaugeArc: 'M30,100 A70,70 0 0,1 82,38',
        kpis: { supplier: { val: '98%', status: 'normal' }, logistics: { val: '82%', status: 'warning' }, inventory: { val: '正常', status: 'normal' }, quality: { val: 'A+', status: 'normal' } },
        nodes: { factory: 'normal', warehouse: 'normal', delivery: 'warning', store: 'normal' },
        alerts: [
            { severity: 'warning', title: '配送延迟预警', desc: '浦东3条配送线路延迟15-25分钟，受早高峰交通影响', time: '09:12' }
        ],
        timeline: { time: '09:12', text: '检测到浦东配送延迟，物流准时率下降', type: 'warning' }
    },
    {
        phase: 'critical',
        gaugeScore: 72,
        gaugeColor: 'var(--accent-red)',
        gaugeLabel: '高风险',
        gaugeArc: 'M30,100 A70,70 0 0,1 140,44',
        kpis: { supplier: { val: '95%', status: 'normal' }, logistics: { val: '72%', status: 'warning' }, inventory: { val: '告警', status: 'critical' }, quality: { val: 'A', status: 'normal' } },
        nodes: { factory: 'normal', warehouse: 'critical', delivery: 'warning', store: 'normal' },
        alerts: [
            { severity: 'critical', title: '库存紧急告警', desc: '浦东分仓牛奶库存剩余420kg，预计明日需求680kg，缺口260kg', time: '09:18' },
            { severity: 'warning', title: '配送延迟升级', desc: '浦东5条线路受影响，平均延迟扩大至30分钟', time: '09:15' }
        ],
        timeline: { time: '09:18', text: '浦东分仓牛奶库存告急，触发紧急预警', type: 'critical' }
    },
    {
        phase: 'recovery',
        gaugeScore: 38,
        gaugeColor: 'var(--accent-cyan)',
        gaugeLabel: '恢复中',
        gaugeArc: 'M30,100 A70,70 0 0,1 66,45',
        kpis: { supplier: { val: '98%', status: 'normal' }, logistics: { val: '91%', status: 'normal' }, inventory: { val: '调拨中', status: 'warning' }, quality: { val: 'A+', status: 'normal' } },
        nodes: { factory: 'normal', warehouse: 'warning', delivery: 'normal', store: 'normal' },
        alerts: [
            { severity: 'info', title: 'AI调拨已执行', desc: '浦西中心仓 → 浦东分仓 紧急调拨牛奶300kg，预计2小时到达', time: '09:22' }
        ],
        timeline: { time: '09:22', text: 'AI自动执行跨仓调拨，配送恢复正常', type: 'resolved' }
    }
];

// 绘制风险趋势折线图
function drawRiskTrendChart() {
    const line = document.getElementById('riskTrendLine');
    const area = document.getElementById('riskTrendArea');
    const xLabels = document.getElementById('riskTrendXLabels');
    const dots = document.getElementById('riskTrendDots');
    if (!line || !area) return;

    const xStart = 55, xEnd = 320, yTop = 15, yBottom = 85;
    const xStep = (xEnd - xStart) / (RISK_TREND_DATA.length - 1);

    let points = '';
    let areaPoints = `${xStart},${yBottom} `;
    let labelsHtml = '';
    let dotsHtml = '';

    RISK_TREND_DATA.forEach((val, i) => {
        const x = xStart + i * xStep;
        const y = yBottom - (val / 100) * (yBottom - yTop);
        points += `${x},${y} `;
        areaPoints += `${x},${y} `;
        labelsHtml += `<text x="${x}" y="96" text-anchor="middle" class="trend-axis-label">${RISK_TREND_DATES[i]}</text>`;
        dotsHtml += `<circle cx="${x}" cy="${y}" r="3" fill="var(--accent-cyan)" stroke="var(--bg-card)" stroke-width="1.5"/>`;
    });

    areaPoints += `${xEnd},${yBottom}`;

    line.setAttribute('points', points.trim());
    area.setAttribute('points', areaPoints.trim());
    if (xLabels) xLabels.innerHTML = labelsHtml;
    if (dots) dots.innerHTML = dotsHtml;

    // Trigger draw animation
    requestAnimationFrame(() => {
        const len = line.getTotalLength();
        line.style.strokeDasharray = len;
        line.style.strokeDashoffset = len;
        requestAnimationFrame(() => {
            line.style.transition = 'stroke-dashoffset 1.5s ease';
            line.style.strokeDashoffset = '0';
        });
    });
}

// 应用风险事件到UI
function applyRiskEvent(event) {
    // 更新仪表盘
    const gaugeArc = document.getElementById('riskGaugeArc');
    const gaugeValue = document.getElementById('riskGaugeValue');
    const gaugeLabel = document.getElementById('riskGaugeLabel');

    if (gaugeArc) {
        gaugeArc.setAttribute('d', event.gaugeArc);
        gaugeArc.style.stroke = event.gaugeColor;
    }
    if (gaugeValue) {
        gaugeValue.textContent = event.gaugeScore;
        gaugeValue.style.fill = event.gaugeColor;
    }
    if (gaugeLabel) gaugeLabel.textContent = event.gaugeLabel;

    // 更新KPI
    const kpiMap = { supplier: 'kpiSupplier', logistics: 'kpiLogistics', inventory: 'kpiInventory', quality: 'kpiQuality' };
    const valMap = { supplier: 'kpiSupplierVal', logistics: 'kpiLogisticsVal', inventory: 'kpiInventoryVal', quality: 'kpiQualityVal' };

    Object.entries(event.kpis).forEach(([key, data]) => {
        const el = document.getElementById(kpiMap[key]);
        const valEl = document.getElementById(valMap[key]);
        if (el) el.dataset.status = data.status;
        if (valEl) valEl.textContent = data.val;
    });

    // 更新节点状态
    const nodeMap = { factory: 'nodeFactory', warehouse: 'nodeWarehouse', delivery: 'nodeDelivery', store: 'nodeStore' };
    Object.entries(event.nodes).forEach(([key, status]) => {
        const el = document.getElementById(nodeMap[key]);
        if (el) el.dataset.status = status;
    });

    // 更新告警
    const alertCards = document.getElementById('alertCards');
    const alertCount = document.getElementById('alertCount');
    if (alertCards && event.alerts.length > 0) {
        alertCards.innerHTML = '';
        event.alerts.forEach(alert => {
            const card = document.createElement('div');
            card.className = `alert-card severity-${alert.severity}`;
            card.innerHTML = `
                <div class="alert-title">${alert.title}</div>
                <div class="alert-desc">${alert.desc}</div>
                <div class="alert-time">${alert.time}</div>
            `;
            alertCards.appendChild(card);
        });
    } else if (alertCards && event.alerts.length === 0) {
        alertCards.innerHTML = `<div class="alert-empty">
            <svg viewBox="0 0 24 24" width="20" height="20" style="opacity:0.3"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8,12 L11,15 L16,9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>暂无告警 · 系统运行正常</span>
        </div>`;
    }
    if (alertCount) alertCount.textContent = event.alerts.length;

    // 追加时间线
    const timeline = document.getElementById('riskTimeline');
    if (timeline && event.timeline) {
        const item = document.createElement('div');
        item.className = `timeline-item ${event.timeline.type}`;
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-time">${event.timeline.time}</span>
                <span class="timeline-text">${event.timeline.text}</span>
            </div>
        `;
        timeline.appendChild(item);
        timeline.scrollTop = timeline.scrollHeight;
    }
}

// 重置风险监控UI
function resetSupplyChainUI() {
    // Reset gauge
    const gaugeArc = document.getElementById('riskGaugeArc');
    const gaugeValue = document.getElementById('riskGaugeValue');
    const gaugeLabel = document.getElementById('riskGaugeLabel');
    if (gaugeArc) { gaugeArc.setAttribute('d', 'M30,100 A70,70 0 0,1 52,68'); gaugeArc.style.stroke = 'var(--accent-green)'; }
    if (gaugeValue) { gaugeValue.textContent = '23'; gaugeValue.style.fill = 'var(--accent-green)'; }
    if (gaugeLabel) gaugeLabel.textContent = '低风险';

    // Reset KPIs
    ['kpiSupplier', 'kpiLogistics', 'kpiInventory', 'kpiQuality'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.dataset.status = 'normal';
    });
    const kpiDefaults = { kpiSupplierVal: '98%', kpiLogisticsVal: '100%', kpiInventoryVal: '正常', kpiQualityVal: 'A+' };
    Object.entries(kpiDefaults).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    });

    // Reset nodes
    ['nodeFactory', 'nodeWarehouse', 'nodeDelivery', 'nodeStore'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.dataset.status = 'normal';
    });

    // Reset alerts
    const alertCards = document.getElementById('alertCards');
    const alertCount = document.getElementById('alertCount');
    if (alertCards) alertCards.innerHTML = `<div class="alert-empty">
        <svg viewBox="0 0 24 24" width="20" height="20" style="opacity:0.3"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8,12 L11,15 L16,9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>暂无告警 · 系统运行正常</span>
    </div>`;
    if (alertCount) alertCount.textContent = '0';

    // Reset timeline
    const timeline = document.getElementById('riskTimeline');
    if (timeline) timeline.innerHTML = `<div class="timeline-item scanning">
        <div class="timeline-dot"></div>
        <div class="timeline-content"><span class="timeline-time">--:--</span><span class="timeline-text">等待扫描...</span></div>
    </div>`;

    // Hide scanning overlay
    const overlay = document.getElementById('scanningOverlay');
    if (overlay) overlay.classList.remove('active');
}

// 供应链风险监控完整演示
async function runSupplyChainDemo() {
    await sleep(500);
    if (!state.demoRunning) return;

    // 重置UI
    resetSupplyChainUI();

    // 先画趋势图
    drawRiskTrendChart();
    await sleep(1800);
    if (!state.demoRunning) return;

    // 显示扫描动画
    const overlay = document.getElementById('scanningOverlay');
    if (overlay) overlay.classList.add('active');
    await sleep(2000);
    if (!state.demoRunning) return;
    if (overlay) overlay.classList.remove('active');

    // 清空初始时间线
    const timeline = document.getElementById('riskTimeline');
    if (timeline) timeline.innerHTML = '';

    // 4阶段演示
    const delays = [3000, 5000, 5000, 5000];
    for (let i = 0; i < RISK_EVENTS.length; i++) {
        if (!state.demoRunning) return;
        applyRiskEvent(RISK_EVENTS[i]);
        await sleep(delays[i]);
    }
}

// =========================================
// 启动
// =========================================
document.addEventListener('DOMContentLoaded', init);
