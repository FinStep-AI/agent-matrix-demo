/**
 * i18n - 国际化翻译模块
 * 支持中文(zh)和英文(en)切换
 */
const I18N = {
    zh: {
        // ====== 落地页 Landing ======
        'landing.title': '连锁零售企业 AI Agent端到端解决方案',
        'landing.subtitle': '人店厂一体化智能管理 · Agent矩阵架构',
        'page.title.tag': '连锁零售企业 AI Agent端到端解决方案',

        // 卡片 - 人
        'card.people.label': '人',
        'card.people.title': '员工与客户服务',
        'card.people.desc': '智能客服、加盟咨询与员工培训一体化服务平台',
        'card.people.agent1': '智能客服Agent',
        'card.people.agent2': '加盟咨询Agent',

        // 卡片 - 店
        'card.store.label': '店',
        'card.store.title': '门店智能运营',
        'card.store.desc': 'AI驱动的门店巡检、合规检查与经营数据洞察',
        'card.store.agent1': '巡检Agent',
        'card.store.agent2': '经营助手Agent',

        // 卡片 - 厂
        'card.factory.label': '厂',
        'card.factory.title': '供应链智能管理',
        'card.factory.desc': '物料需求预测、库存优化与配送路径智能规划',
        'card.factory.agent1': '供应链风险监控Agent',
        'card.factory.agent2': '物料预测Agent',

        // 连接线
        'connection.label': '数据互联 · 智能协同',

        // 指标
        'metric.stores': '覆盖门店',
        'metric.inspections': '日巡检量',
        'metric.accuracy': '识别准确率',
        'metric.efficiency': '人效提升',

        // 页脚
        'footer.powered': 'Powered by Claude AI + Vision API',

        // ====== 通用 ======
        'common.back': '返回',
        'common.ready': '就绪',
        'common.speed': '速度',

        // ====== 门店页 Store ======
        'store.title': '门店智能运营',
        'store.badge': '覆盖门店',
        'store.tab.inspection': '智能巡检Agent',
        'store.tab.inspection.stat': '召回率95%+',
        'store.tab.business': '经营助手Agent',
        'store.tab.business.stat': '实时数据洞察',

        // 巡检
        'inspection.section.scenes': '检查场景',
        'inspection.scene.bar': '吧台清洁检查',
        'inspection.scene.equipment': '设备运行检查',
        'inspection.scene.staff': '员工着装检查',
        'inspection.scene.store': '门店外观检查',
        'inspection.scene.wash': '洗手区检查',
        'inspection.step1': '图片上传',
        'inspection.step2': 'AI识别',
        'inspection.step3': '结果输出',
        'inspection.upload.text': '拖放图片到此处上传',
        'inspection.upload.hint': '支持 JPG、PNG 格式',
        'inspection.upload.btn': '选择文件',
        'inspection.uploading': '正在上传...',
        'inspection.analyzing': 'AI 正在分析图片...',
        'inspection.analyzing.scene': '场景识别中...',
        'inspection.result.title': '检测结果',
        'inspection.result.waiting': '等待图片上传...',
        'inspection.result.pass': '检查通过',
        'inspection.result.fail': '检查不通过',
        'inspection.store.info': '某茶饮品牌 · 门店',
        'inspection.modal.title': '检测结果',
        'inspection.modal.autoclose': '自动关闭',
        'inspection.uploading.prefix': '正在上传:',
        'inspection.upload.done': '上传完成!',
        'inspection.analysis.done': '分析完成!',

        // ChatBI
        'chatbi.title': '智能经营分析',
        'chatbi.tab.sales': '销售分析',
        'chatbi.tab.efficiency': '人效分析',
        'chatbi.tab.diagnosis': '经营诊断',
        'chatbi.greeting': '您好！我是经营助手Agent。我可以帮您：<br>• 分析销售数据，发现增长机会<br>• 提升人效，优化排班方案<br>• 经营诊断，发现异常并给出建议<br>请问有什么需要分析的？',
        'chatbi.input.placeholder': '输入您的问题...',
        'chatbi.send': '发送',
        'chatbi.chart.title': '数据概览',
        'chatbi.chart.day': '日',
        'chatbi.chart.week': '周',
        'chatbi.chart.month': '月',
        'chatbi.chart.placeholder': '选择问题查看数据可视化',
        'chatbi.insight.ai': 'AI洞察',
        'chatbi.insight.ai.text': '华东区3家门店连续3天销售下滑超15%，建议排查原因',
        'chatbi.insight.hr': '人效提醒',
        'chatbi.insight.hr.text': '6家门店人效低于平均线，调整排班后可月省¥28K',
        'chatbi.data.revenue': '本周营收',
        'chatbi.data.efficiency': '人效(杯/人时)',
        'chatbi.data.health': '经营健康度',
        'chatbi.quick.sales': '销售预警',
        'chatbi.quick.efficiency': '人效分析',
        'chatbi.quick.diagnosis': '经营诊断',
        'chatbi.analyzing': '正在分析数据...',
        'chatbi.related': '相关问题：',

        // ====== 人员页 People ======
        'people.title': '员工与客户服务',
        'people.badge': '问题解决率',
        'people.tab.service': '智能客服Agent',
        'people.tab.service.stat': '8大场景覆盖',
        'people.tab.franchise': '加盟咨询Agent',
        'people.tab.franchise.stat': '7×24小时',

        // 客服
        'service.section.title': '服务场景',
        'service.tab.policy': '政策问答',
        'service.tab.delivery': '快递客服',
        'service.tab.operation': '运营指引',
        'service.tab.daily': '日常客服',
        'service.tab.training': '培训支持',
        'service.tab.complaint': '投诉处理',
        'service.stat.scenes': '场景覆盖',
        'service.stat.resolve': '问题解决率',
        'service.stat.response': '响应时间',
        'service.related.title': '相关问题：',

        // 加盟
        'franchise.section.title': '加盟咨询服务',
        'franchise.feature.online': '7×24小时在线咨询',
        'franchise.feature.review': '智能资质预审',
        'franchise.feature.location': '选址智能推荐',
        'franchise.feature.roi': '投资回报测算',
        'franchise.stat.monthly': '月咨询量',
        'franchise.stat.satisfaction': '满意度',
        'franchise.stat.conversion': '转化提升',
        'franchise.related.title': '相关问题：',

        // ====== 工厂页 Factory ======
        'factory.title': '供应链智能管理',
        'factory.badge': '配送准时率',
        'factory.tab.material': '物料预测Agent',
        'factory.tab.material.stat': '损耗降低35%',
        'factory.tab.supplychain': '供应链风险监控Agent',
        'factory.tab.supplychain.stat': '实时监控',

        // 供应链风险监控
        'risk.gauge.title': '供应链风险指数',
        'risk.gauge.low': '低风险',
        'risk.kpi.supplier': '供应商履约',
        'risk.kpi.logistics': '物流准时率',
        'risk.kpi.inventory': '库存健康度',
        'risk.kpi.quality': '品控评级',
        'risk.kpi.normal': '正常',
        'risk.trend.title': '近7日风险趋势',
        'risk.nodes.title': '供应链节点状态',
        'risk.node.factory': '中央工厂',
        'risk.node.warehouse': '区域仓库',
        'risk.node.delivery': '配送网络',
        'risk.node.store': '终端门店',
        'risk.alerts.title': '实时告警',
        'risk.alerts.empty': '暂无告警 · 系统运行正常',
        'risk.timeline.title': '事件时间线',
        'risk.timeline.waiting': '等待扫描...',
        'risk.scanning': '全链路扫描中...',

        // 物料预测
        'material.section.title': '选择预测物料',
        'material.milk': '牛奶',
        'material.milk.tag': '鲜奶/奶粉',
        'material.lemon': '柠檬',
        'material.lemon.tag': '鲜果/浓缩',
        'material.sugar': '糖浆',
        'material.sugar.tag': '果糖/蔗糖',
        'material.tea': '茶叶',
        'material.tea.tag': '红茶/绿茶/乌龙',
        'material.cup': '杯具',
        'material.cup.tag': '杯/盖/吸管',
        'material.ice': '冰块',
        'material.ice.tag': '食用冰',
        'material.predict.btn': '开始预测分析',
        'material.empty': '选择物料后开始预测分析',
        'material.analyzing': '预测分析中...',
        'material.forecast.period': '未来14天预测',
        'material.forecast.accuracy': '模型准确率 94.2% · LSTM+XGBoost',
        'material.chart.demand': '日需求量预测',
        'material.chart.demand.total': '14日总需求',
        'material.chart.price': '采购价格预测',
        'material.chart.price.avg': '预测均价',
        'material.chart.inventory': '库存消耗预测',
        'material.chart.inventory.warning': '⚠ 需补货',
        'material.chart.today': '今日',
        'material.chart.safety': '安全线 800kg',
        'material.ai.title': 'AI 智能建议',
        'material.ai.model': 'GPT-4o · 综合研判',

        // 演示控制台
        'console.play': '开始演示',
        'console.pause': '暂停',
        'console.stop': '停止',
        'console.mute': '静音',
    },

    en: {
        // ====== Landing ======
        'landing.title': 'Chain Retail AI Agent End-to-End Solution',
        'landing.subtitle': 'People · Store · Factory Integrated Management · Agent Matrix',
        'page.title.tag': 'Chain Retail AI Agent End-to-End Solution',

        // Cards - People
        'card.people.label': 'People',
        'card.people.title': 'Staff & Customer Service',
        'card.people.desc': 'Intelligent customer service, franchise consulting & staff training platform',
        'card.people.agent1': 'Customer Service Agent',
        'card.people.agent2': 'Franchise Consulting Agent',

        // Cards - Store
        'card.store.label': 'Store',
        'card.store.title': 'Smart Store Operations',
        'card.store.desc': 'AI-powered store inspection, compliance check & business data insights',
        'card.store.agent1': 'Inspection Agent',
        'card.store.agent2': 'Business Intelligence Agent',

        // Cards - Factory
        'card.factory.label': 'Factory',
        'card.factory.title': 'Smart Supply Chain',
        'card.factory.desc': 'Material demand forecasting, inventory optimization & smart logistics',
        'card.factory.agent1': 'Supply Chain Risk Monitor Agent',
        'card.factory.agent2': 'Material Forecast Agent',

        // Connection
        'connection.label': 'Data Interconnection · Smart Collaboration',

        // Metrics
        'metric.stores': 'Stores Covered',
        'metric.inspections': 'Daily Inspections',
        'metric.accuracy': 'Recognition Accuracy',
        'metric.efficiency': 'Efficiency Gain',

        // Footer
        'footer.powered': 'Powered by Claude AI + Vision API',

        // ====== Common ======
        'common.back': 'Back',
        'common.ready': 'Ready',
        'common.speed': 'Speed',

        // ====== Store Page ======
        'store.title': 'Smart Store Operations',
        'store.badge': 'Stores Covered',
        'store.tab.inspection': 'Inspection Agent',
        'store.tab.inspection.stat': 'Recall 95%+',
        'store.tab.business': 'Business Intelligence Agent',
        'store.tab.business.stat': 'Real-time Insights',

        // Inspection
        'inspection.section.scenes': 'Check Scenarios',
        'inspection.scene.bar': 'Counter Cleanliness',
        'inspection.scene.equipment': 'Equipment Check',
        'inspection.scene.staff': 'Staff Dress Code',
        'inspection.scene.store': 'Store Appearance',
        'inspection.scene.wash': 'Hand-wash Station',
        'inspection.step1': 'Upload Image',
        'inspection.step2': 'AI Analysis',
        'inspection.step3': 'Results',
        'inspection.upload.text': 'Drag & drop images here',
        'inspection.upload.hint': 'Supports JPG, PNG formats',
        'inspection.upload.btn': 'Select File',
        'inspection.uploading': 'Uploading...',
        'inspection.analyzing': 'AI is analyzing the image...',
        'inspection.analyzing.scene': 'Identifying scene...',
        'inspection.result.title': 'Inspection Results',
        'inspection.result.waiting': 'Waiting for image upload...',
        'inspection.result.pass': 'Passed',
        'inspection.result.fail': 'Failed',
        'inspection.store.info': 'Tea Brand · Store',
        'inspection.modal.title': 'Inspection Results',
        'inspection.modal.autoclose': 'Auto close',
        'inspection.uploading.prefix': 'Uploading:',
        'inspection.upload.done': 'Upload complete!',
        'inspection.analysis.done': 'Analysis complete!',

        // ChatBI
        'chatbi.title': 'Smart Business Analytics',
        'chatbi.tab.sales': 'Sales',
        'chatbi.tab.efficiency': 'Efficiency',
        'chatbi.tab.diagnosis': 'Diagnosis',
        'chatbi.greeting': 'Hello! I\'m the Business Intelligence Agent. I can help you:<br>• Analyze sales data & discover growth opportunities<br>• Improve staff efficiency & optimize scheduling<br>• Business diagnosis with actionable insights<br>What would you like to analyze?',
        'chatbi.input.placeholder': 'Type your question...',
        'chatbi.send': 'Send',
        'chatbi.chart.title': 'Data Overview',
        'chatbi.chart.day': 'D',
        'chatbi.chart.week': 'W',
        'chatbi.chart.month': 'M',
        'chatbi.chart.placeholder': 'Select a question to view data visualization',
        'chatbi.insight.ai': 'AI Insight',
        'chatbi.insight.ai.text': '3 stores in East China had sales decline >15% for 3 consecutive days, investigation recommended',
        'chatbi.insight.hr': 'Efficiency Alert',
        'chatbi.insight.hr.text': '6 stores below average efficiency, scheduling adjustment saves ¥28K/month',
        'chatbi.data.revenue': 'Weekly Revenue',
        'chatbi.data.efficiency': 'Efficiency (cups/hr)',
        'chatbi.data.health': 'Business Health',
        'chatbi.quick.sales': 'Sales Alert',
        'chatbi.quick.efficiency': 'Efficiency',
        'chatbi.quick.diagnosis': 'Diagnosis',
        'chatbi.analyzing': 'Analyzing data...',
        'chatbi.related': 'Related:',

        // ====== People Page ======
        'people.title': 'Staff & Customer Service',
        'people.badge': 'Resolution Rate',
        'people.tab.service': 'Customer Service Agent',
        'people.tab.service.stat': '8 Scenarios',
        'people.tab.franchise': 'Franchise Consulting Agent',
        'people.tab.franchise.stat': '24/7 Service',

        // Service
        'service.section.title': 'Service Scenarios',
        'service.tab.policy': 'Policy Q&A',
        'service.tab.delivery': 'Delivery Support',
        'service.tab.operation': 'Operations Guide',
        'service.tab.daily': 'General Support',
        'service.tab.training': 'Training Support',
        'service.tab.complaint': 'Complaint Handling',
        'service.stat.scenes': 'Scenarios',
        'service.stat.resolve': 'Resolution Rate',
        'service.stat.response': 'Response Time',
        'service.related.title': 'Related:',

        // Franchise
        'franchise.section.title': 'Franchise Consulting',
        'franchise.feature.online': '24/7 Online Consulting',
        'franchise.feature.review': 'Smart Qualification Review',
        'franchise.feature.location': 'AI Location Recommendation',
        'franchise.feature.roi': 'ROI Calculator',
        'franchise.stat.monthly': 'Monthly Inquiries',
        'franchise.stat.satisfaction': 'Satisfaction',
        'franchise.stat.conversion': 'Conversion Lift',
        'franchise.related.title': 'Related:',

        // ====== Factory Page ======
        'factory.title': 'Smart Supply Chain',
        'factory.badge': 'On-time Delivery',
        'factory.tab.material': 'Material Forecast Agent',
        'factory.tab.material.stat': 'Waste -35%',
        'factory.tab.supplychain': 'Supply Chain Risk Monitor Agent',
        'factory.tab.supplychain.stat': 'Real-time',

        // Supply Chain Risk Monitor
        'risk.gauge.title': 'Supply Chain Risk Index',
        'risk.gauge.low': 'Low Risk',
        'risk.kpi.supplier': 'Supplier Fulfillment',
        'risk.kpi.logistics': 'Logistics On-time',
        'risk.kpi.inventory': 'Inventory Health',
        'risk.kpi.quality': 'Quality Rating',
        'risk.kpi.normal': 'Normal',
        'risk.trend.title': '7-Day Risk Trend',
        'risk.nodes.title': 'Supply Chain Node Status',
        'risk.node.factory': 'Central Factory',
        'risk.node.warehouse': 'Regional Warehouse',
        'risk.node.delivery': 'Distribution Network',
        'risk.node.store': 'Retail Stores',
        'risk.alerts.title': 'Real-time Alerts',
        'risk.alerts.empty': 'No alerts · All systems normal',
        'risk.timeline.title': 'Event Timeline',
        'risk.timeline.waiting': 'Waiting for scan...',
        'risk.scanning': 'Full chain scanning...',

        // Material Forecast
        'material.section.title': 'Select Material to Forecast',
        'material.milk': 'Milk',
        'material.milk.tag': 'Fresh/Powder',
        'material.lemon': 'Lemon',
        'material.lemon.tag': 'Fresh/Concentrate',
        'material.sugar': 'Syrup',
        'material.sugar.tag': 'Fructose/Sucrose',
        'material.tea': 'Tea',
        'material.tea.tag': 'Black/Green/Oolong',
        'material.cup': 'Cups',
        'material.cup.tag': 'Cup/Lid/Straw',
        'material.ice': 'Ice',
        'material.ice.tag': 'Food-grade Ice',
        'material.predict.btn': 'Start Forecast Analysis',
        'material.empty': 'Select material to start forecast',
        'material.analyzing': 'Forecast analyzing...',
        'material.forecast.period': '14-Day Forecast',
        'material.forecast.accuracy': 'Model Accuracy 94.2% · LSTM+XGBoost',
        'material.chart.demand': 'Daily Demand Forecast',
        'material.chart.demand.total': '14-Day Total',
        'material.chart.price': 'Purchase Price Forecast',
        'material.chart.price.avg': 'Avg. Price',
        'material.chart.inventory': 'Inventory Depletion Forecast',
        'material.chart.inventory.warning': '⚠ Restock Needed',
        'material.chart.today': 'Today',
        'material.chart.safety': 'Safety Line 800kg',
        'material.ai.title': 'AI Recommendations',
        'material.ai.model': 'GPT-4o · Integrated Analysis',

        // Demo Console
        'console.play': 'Start Demo',
        'console.pause': 'Pause',
        'console.stop': 'Stop',
        'console.mute': 'Mute',
    }
};

// 当前语言
let currentLang = 'zh';

/**
 * 获取翻译文本
 * @param {string} key 翻译key
 * @param {string} [fallback] 备用文本
 * @returns {string}
 */
function t(key, fallback) {
    return (I18N[currentLang] && I18N[currentLang][key]) || fallback || key;
}

/**
 * 设置当前语言
 * @param {string} lang 'zh' 或 'en'
 */
function setLang(lang) {
    currentLang = lang;
}

/**
 * 获取当前语言
 * @returns {string}
 */
function getLang() {
    return currentLang;
}
