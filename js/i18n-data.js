/**
 * i18n-data.js - 英文版复杂数据结构
 * 仅在切换英文时替换 JS 常量中的中文文本
 */

const I18N_DATA = {
    // =========================================
    // SCENE_CONFIG 英文版
    // =========================================
    SCENE_CONFIG: {
        bar: {
            name: 'Counter Cleanliness',
            store: 'Tea Brand · Shuozhou',
            detections: [
                { label: '✓ Floor Clean', pass: true },
                { label: '✓ Counter Tidy', pass: true }
            ],
            result: {
                desc: '',
                details: [
                    { label: 'Scene', value: 'Behind Counter', pass: true },
                    { label: 'Floor', value: 'Clean & Pass', pass: true },
                    { label: 'Counter', value: 'Neat & Tidy', pass: true },
                    { label: 'Equipment', value: 'Properly Placed', pass: true }
                ]
            },
            analysisSteps: ['Identifying scene...', 'Checking floor cleanliness...', 'Checking counter tidiness...', 'Generating report...']
        },
        equipment: {
            name: 'Equipment Check',
            store: 'Tea Brand · Yuncheng',
            detections: [
                { label: '✓ Heater Normal', pass: true },
                { label: '✓ Temp Control OK', pass: true }
            ],
            result: {
                desc: '',
                details: [
                    { label: 'Scene', value: 'Heating Equipment', pass: true },
                    { label: 'Heater', value: 'Clean & Normal', pass: true },
                    { label: 'Temperature', value: 'Working Normal', pass: true },
                    { label: 'Cleanliness', value: 'Meets Standard', pass: true }
                ]
            },
            analysisSteps: ['Identifying equipment type...', 'Checking operation status...', 'Checking cleanliness...', 'Generating report...']
        },
        staff: {
            name: 'Staff Dress Code',
            store: 'Standard Dress Code Reference',
            detections: [
                { label: '✓ Cap Worn', pass: true },
                { label: '✓ Uniform Neat', pass: true },
                { label: '✓ Cap Worn', pass: true },
                { label: '✓ Uniform Neat', pass: true }
            ],
            result: {
                desc: '',
                details: [
                    { label: 'Scene', value: 'Staff Dress', pass: true },
                    { label: 'Cap', value: 'Properly Worn', pass: true },
                    { label: 'Uniform', value: 'Clean & Neat', pass: true },
                    { label: 'Appearance', value: 'Compliant', pass: true }
                ]
            },
            analysisSteps: ['Identifying staff...', 'Checking cap...', 'Checking uniform...', 'Generating report...']
        },
        store: {
            name: 'Store Appearance',
            store: 'Store Exterior Reference',
            detections: [
                { label: '✓ Signage OK', pass: true },
                { label: '✓ QR Code Clear', pass: true }
            ],
            result: {
                desc: '',
                details: [
                    { label: 'Scene', value: 'Store Exterior', pass: true },
                    { label: 'Signage', value: 'Intact & Lit', pass: true },
                    { label: 'QR Code', value: 'Clear & Scannable', pass: true },
                    { label: 'Overall Image', value: 'Meets Standard', pass: true }
                ]
            },
            analysisSteps: ['Identifying store exterior...', 'Checking signage...', 'Checking QR code...', 'Generating report...']
        },
        wash: {
            name: 'Hand-wash Station',
            store: 'Tea Brand · Chengdu',
            detections: [
                { label: '✓ Dryer Normal', pass: true },
                { label: '⚠ Ice in Sink', pass: false }
            ],
            result: {
                desc: 'Ice residue found in sink, needs cleaning',
                details: [
                    { label: 'Scene', value: 'Hand-wash Area', pass: true },
                    { label: 'Hand Dryer', value: 'Clean & Normal', pass: true },
                    { label: 'Sink', value: 'Debris Found', pass: false },
                    { label: 'Cleanliness', value: 'Needs Improvement', pass: false }
                ]
            },
            analysisSteps: ['Identifying wash area...', 'Checking hand dryer...', 'Checking sink cleanliness...', 'Generating report...']
        }
    },

    // =========================================
    // CHATBI_RESPONSES 英文版
    // =========================================
    CHATBI_QUESTIONS: {
        sales: 'Which stores had declining sales this week?',
        supply: 'Forecast tomorrow\'s lemon demand and provide restocking advice',
        efficiency: 'Analyze East China store efficiency and optimize scheduling',
        diagnosis: 'What business anomalies need attention recently?'
    },
    CHATBI_RESPONSES: {
        sales: {
            response: `<p><strong>{search} Sales Alert Analysis Complete</strong></p>
                <p style="margin: 8px 0;">Detected <span style="color: var(--accent-red); font-weight: 600;">3 stores</span> with >15% sales decline this week:</p>
                <div style="background: rgba(248,81,73,0.1); padding: 10px; border-radius: 8px; margin: 8px 0; font-size: 12px;">
                    <p>{store} Hangzhou West Lake: ↓18.2% (¥2,340/day less)</p>
                    <p>{store} Suzhou Guanqian: ↓16.5% (¥1,890/day less)</p>
                    <p>{store} Nanjing Xinjiekou: ↓15.8% (¥1,720/day less)</p>
                </div>
                <p style="color: var(--accent-blue); margin-top: 12px;"><strong>{bulb} AI Recommendation:</strong></p>
                <p style="font-size: 12px;">1. Hangzhou store: new competitor nearby, suggest promotional campaign</p>
                <p style="font-size: 12px;">2. Suzhou & Nanjing: normal traffic but lower conversion, check service quality</p>`,
            chart: 'salesWarning',
            insight: { type: 'warning', title: 'Sales Alert', text: '3 stores with >15% sales decline, immediate follow-up recommended' }
        },
        supply: {
            response: `<p><strong>{pkg} Material Demand Forecast Complete</strong></p>
                <p style="margin: 8px 0; font-size: 13px;">Based on historical sales, weather, holidays, tomorrow's lemon demand:</p>
                <div style="background: rgba(88,166,255,0.1); padding: 10px; border-radius: 8px; margin: 8px 0; font-size: 12px;">
                    <p>{barchart} Regional demand forecast: <strong>2,850kg</strong></p>
                    <p>{pkg} Current stock: <strong>1,920kg</strong></p>
                    <p>{warning} Shortage: <span style="color: var(--accent-red); font-weight: 600;">930kg</span></p>
                </div>
                <p style="color: var(--accent-blue); margin-top: 12px;"><strong>{bulb} Smart Restocking:</strong></p>
                <p style="font-size: 12px;">• Order 1,000kg before 4:00 PM today</p>
                <p style="font-size: 12px;">• Priority delivery: Hangzhou warehouse → 12 East China stores</p>`,
            chart: 'supplyForecast',
            insight: { type: 'highlight', title: 'Restock Alert', text: 'Lemon stock gap 930kg, order before 4:00 PM today' }
        },
        efficiency: {
            response: `<p><strong>{people} Efficiency Analysis Report</strong></p>
                <p style="margin: 8px 0; font-size: 13px;">East China 32 stores efficiency (cups/person·hour):</p>
                <div style="background: rgba(63,185,80,0.1); padding: 10px; border-radius: 8px; margin: 8px 0; font-size: 12px;">
                    <p>{trophy} TOP 3 efficient stores: 22.4 / 21.8 / 20.9</p>
                    <p>{barchart} Regional average: 18.6</p>
                    <p>{warning} Needs improvement: 15.2 / 14.8 / 13.9</p>
                </div>
                <p style="color: var(--accent-blue); margin-top: 12px;"><strong>{bulb} Scheduling Optimization:</strong></p>
                <p style="font-size: 12px;">1. Peak hours (11:00-13:00, 17:00-19:00) add 1-2 staff</p>
                <p style="font-size: 12px;">2. Off-peak (14:00-16:00) reduce to 2 on duty</p>`,
            chart: 'efficiency',
            insight: { type: 'success', title: 'Optimization', text: 'Estimated 15% efficiency gain after scheduling adjustment' }
        },
        diagnosis: {
            response: `<p><strong>{search} Business Diagnosis Report</strong></p>
                <p style="margin: 8px 0; font-size: 13px;">AI full-dimension health scan detected these anomalies:</p>
                <div style="background: rgba(248,81,73,0.1); padding: 10px; border-radius: 8px; margin: 8px 0; font-size: 12px;">
                    <p>{warning} <strong>Critical</strong>: Hangzhou West Lake avg. ticket dropped 22% for 3 days</p>
                    <p>{warning} <strong>Warning</strong>: East China weekend evening output down 30%</p>
                    <p>{store} <strong>Watch</strong>: Nanjing Xinjiekou rating from 95% to 87%</p>
                </div>
                <p style="color: var(--accent-blue); margin-top: 12px;"><strong>{bulb} AI Recommendations:</strong></p>
                <p style="font-size: 12px;">1. West Lake store: launch combo meal to raise avg. ticket</p>
                <p style="font-size: 12px;">2. Weekend evening: add 1 skilled staff for faster output</p>
                <p style="font-size: 12px;">3. Nanjing: arrange mystery shopper visit</p>`,
            chart: 'diagnosis',
            insight: { type: 'warning', title: 'Diagnosis', text: '3 anomalies found, 1 critical, prioritize handling' }
        }
    },
    CHATBI_QUICK_QUESTIONS: {
        sales: { label: 'Sales Alert', question: 'Which stores had declining sales this week?' },
        efficiency: { label: 'Efficiency', question: 'Analyze East China store efficiency and optimize scheduling' },
        diagnosis: { label: 'Diagnosis', question: 'What business anomalies need attention recently?' }
    },

    // =========================================
    // SERVICE_CONVERSATIONS 英文版
    // =========================================
    SERVICE_CONVERSATIONS: {
        policy: {
            question: 'What documents are needed for new employee onboarding?',
            answer: `<p>Per company policy, new employees need the following:</p>
                <ol><li>ID card original & copy</li><li>Health certificate (food industry required)</li><li>Education certificate</li><li>2 passport photos</li><li>Bank account info</li></ol>
                <p class="tip">{bulb} Tip: Health certificate must be valid; available at local CDC office.</p>`,
            related: ['How to get health certificate?', 'Onboarding training process', 'Probation policy']
        },
        delivery: {
            question: 'My order delivery is delayed, when will it arrive?',
            answer: `<p>Order status checked for you:</p>
                <div style="background:var(--bg-elevated);padding:10px;border-radius:8px;margin:8px 0;font-size:12px;">
                    <p>Order: DD20260329-8847</p>
                    <p>Status: En route (rider picked up)</p>
                    <p>ETA: <strong>within 12 minutes</strong></p>
                </div>
                <p class="tip">{bulb} Due to lunch rush, delivery is slightly delayed. A ¥5 coupon has been credited as compensation.</p>`,
            related: ['Request refund', 'Change delivery address', 'Contact rider']
        },
        operation: {
            question: 'Store daily revenue dropped 20%, how to investigate?',
            answer: `<p><strong>Revenue drop investigation steps:</strong></p>
                <ol><li>Check foot traffic: compare with same period</li><li>Analyze avg. ticket: any promotions expired?</li><li>Review product mix: any bestsellers out of stock?</li><li>External factors: weather, competitor activities</li></ol>
                <p class="tip">{bulb} AI analysis: your store traffic is normal but avg. ticket dropped 18%, suggest reviewing combo strategy.</p>`,
            related: ['How to raise avg. ticket', 'Promotion setup', 'Competitor analysis']
        },
        daily: {
            question: 'What are today\'s recommended pairings? Any new items?',
            answer: `<p><strong>Today's Recommendations</strong></p>
                <div style="background:var(--bg-elevated);padding:10px;border-radius:8px;margin:8px 0;font-size:12px;">
                    <p>Signature Combo: Mango Pomelo Sago + Mango Mochi = ¥28 (save ¥5)</p>
                    <p>Refreshing Pick: Iced Lemon Americano + Light Salad = ¥32 (save ¥6)</p>
                    <p>New Item: <strong>Osmanthus Oolong Milk Cap</strong> limited ¥16</p>
                </div>
                <p class="tip">{bulb} First-week share for buy-one-get-one coupon via mini app.</p>`,
            related: ['Membership points', 'Allergen info', 'Calorie query']
        },
        training: {
            question: 'How can new staff quickly learn standard drink preparation?',
            answer: `<p><strong>New Staff Training Path (7-Day Plan):</strong></p>
                <ol><li><strong>Day 1-2:</strong> Basics — equipment, ingredients</li><li><strong>Day 3-4:</strong> Core Menu — 10 classic drinks</li><li><strong>Day 5-6:</strong> Advanced — latte art, sweetness adjustment, speed</li><li><strong>Day 7:</strong> Certification — AI vision + taste dual exam</li></ol>
                <p class="tip">{bulb} Personalized training plan generated; track progress in AI Training Assistant.</p>`,
            related: ['Training videos', 'Assessment criteria', 'Promotion path']
        },
        complaint: {
            question: 'Customer says drink tastes different from before, how to handle?',
            answer: `<p><strong>Taste Complaint Standard Procedure:</strong></p>
                <ol><li>Apologize immediately & document the issue</li><li>Offer free remake or refund</li><li>Investigate: ingredient batch / equipment calibration / staff operation</li><li>Follow up within 48 hours</li></ol>
                <div style="background:rgba(248,81,73,0.1);padding:10px;border-radius:8px;margin:8px 0;font-size:12px;">
                    <p>{warning} AI Alert: This store had 3 taste complaints this week, QC inspection recommended.</p>
                </div>
                <p class="tip">{bulb} Work order auto-generated for regional QC manager, expected processing by tomorrow AM.</p>`,
            related: ['Complaint stats', 'QC standards', 'Customer compensation']
        }
    },

    // =========================================
    // FRANCHISE_CONVERSATIONS 英文版
    // =========================================
    FRANCHISE_CONVERSATIONS: [
        {
            question: 'I want to open a franchise in Hangzhou. How much investment is needed?',
            answer: `<p>Thank you for your interest! Hangzhou franchise investment reference:</p>
                <div class="invest-table">
                    <div class="invest-row"><span class="invest-item">Franchise Fee</span><span class="invest-value">¥11,000</span></div>
                    <div class="invest-row"><span class="invest-item">Equipment</span><span class="invest-value">¥80,000-120,000</span></div>
                    <div class="invest-row"><span class="invest-item">Initial Materials</span><span class="invest-value">¥15,000-25,000</span></div>
                    <div class="invest-row"><span class="invest-item">Renovation</span><span class="invest-value">¥50,000-80,000</span></div>
                    <div class="invest-row total"><span class="invest-item">Est. Total Investment</span><span class="invest-value">¥156,000-236,000</span></div>
                </div>
                <p class="tip">{bulb} Based on your location, 3 high-potential sites recommended, estimated payback period 8-12 months</p>`,
            related: ['Franchise process details', 'Territory protection', 'Financing options']
        },
        {
            question: 'What support does HQ provide after joining?',
            answer: `<p><strong>Comprehensive HQ Support System:</strong></p>
                <ol><li><strong>Site Selection:</strong> AI big data model, 92% revenue prediction accuracy</li><li><strong>Renovation:</strong> Unified design + on-site construction guidance</li><li><strong>Training:</strong> 15-day systematic training + AI ongoing coaching</li><li><strong>Operations:</strong> On-site manager for first month + monthly business review</li><li><strong>Supply Chain:</strong> Central factory delivery, nationwide next-day coverage</li></ol>
                <p class="tip">{bulb} New franchisees get extra 3-month operations support program to ensure smooth launch.</p>`,
            related: ['Training details', 'Supply chain coverage', 'Operations support cases']
        },
        {
            question: 'Will a store in a tier-3 city be profitable?',
            answer: `<p><strong>Tier-3 City Profitability Model:</strong></p>
                <div class="invest-table">
                    <div class="invest-row"><span class="invest-item">Daily Traffic (est.)</span><span class="invest-value">180-250</span></div>
                    <div class="invest-row"><span class="invest-item">Avg. Ticket</span><span class="invest-value">¥18-22</span></div>
                    <div class="invest-row"><span class="invest-item">Monthly Revenue</span><span class="invest-value">¥108,000-165,000</span></div>
                    <div class="invest-row"><span class="invest-item">Gross Margin</span><span class="invest-value">65%-70%</span></div>
                    <div class="invest-row total"><span class="invest-item">Monthly Net Profit</span><span class="invest-value">¥25,000-42,000</span></div>
                </div>
                <p class="tip">{bulb} Based on AI analysis of 256 similar-tier stores, payback period 6-10 months, success rate 87%.</p>`,
            related: ['Same-city case studies', 'Seasonality analysis', 'Cost optimization']
        },
        {
            question: 'What are the franchise requirements and review process?',
            answer: `<p><strong>Franchise Qualification Requirements:</strong></p>
                <ol><li>Age 22-50, full legal capacity</li><li>Align with brand values, willing to operate full-time</li><li>¥150K-250K startup capital proof</li><li>Clean food safety record</li></ol>
                <p><strong>Review Process (AI-accelerated):</strong></p>
                <div style="background:var(--bg-elevated);padding:10px;border-radius:8px;margin:8px 0;font-size:12px;">
                    <p>① Online submission → ② AI pre-review (2 hrs) → ③ Video interview → ④ Signing</p>
                    <p style="margin-top:6px;">Fastest completion in <strong>3 business days</strong></p>
                </div>
                <p class="tip">{bulb} Upload your documents now, AI pre-review results within 2 hours.</p>`,
            related: ['Upload documents', 'Common review questions', 'Contract terms']
        }
    ],

    // =========================================
    // NARRATION_SCRIPTS 英文版
    // =========================================
    NARRATION_SCRIPTS: {
        opening: {
            text: 'Welcome to the Retail AI Agent Matrix. We\'ll show you how AI becomes the intelligent operating system for chain retail — from customer service, to store management, to supply chain optimization, empowering 53,000+ stores with end-to-end digital operations.',
            label: 'Introduction'
        },
        people_intro: {
            text: 'First, let\'s enter the "People" scenario — customer and employee service. This is AI\'s first touchpoint with customers.',
            label: 'People → Intro'
        },
        service_demo: {
            text: 'The Customer Service Agent, powered by LLM, understands complex business queries, accurately answers policy questions, order tracking and operations guidance, reducing average response time from 45 seconds to 3 seconds.',
            label: 'People → Service'
        },
        franchise_demo: {
            text: 'The Franchise Consulting Agent also uses AI — providing professional, consistent answers to potential franchisees\' investment and policy questions, improving conversion rate by 37%.',
            label: 'People → Franchise'
        },
        store_intro: {
            text: 'Next, the "Store" scenario. How does AI ensure every store achieves standardized operations?',
            label: 'Store → Intro'
        },
        inspection_demo: {
            text: 'The Inspection Agent uses computer vision to automatically check counter hygiene, equipment status, staff dress code across 5 scenarios, performing 320,000+ AI inspections daily, raising compliance from 72% to 98.6%.',
            label: 'Store → Inspection'
        },
        chatbi_demo: {
            text: 'The Business Intelligence Agent — ChatBI lets store managers ask questions in natural language to get sales analysis, inventory alerts, and business recommendations, eliminating complex report systems.',
            label: 'Store → ChatBI'
        },
        factory_intro: {
            text: 'Finally, the "Factory" scenario — supply chain is the lifeline of chain retail.',
            label: 'Factory → Intro'
        },
        material_demo: {
            text: 'The Material Forecast Agent uses time-series models, combining weather, holidays and historical sales to predict 6 core materials over 14-day rolling windows at 96.3% accuracy, saving over ¥24 million in waste annually.',
            label: 'Factory → Material'
        },
        supplychain_demo: {
            text: 'The Supply Chain Risk Monitor Agent scans suppliers, logistics, inventory and quality in real-time — when risk index exceeds threshold, it auto-triggers AI rebalancing, reducing supply disruption from 48 hours to 4 hours.',
            label: 'Factory → Risk Monitor'
        },
        closing: {
            text: 'That concludes the AI Agent Matrix demo. Six AI Agents work in concert across People, Store, and Factory, building the intelligent operating system for chain retail enterprises.',
            label: 'Summary'
        }
    },

    // =========================================
    // MATERIAL_CONFIG 英文版 (名称/建议/警告)
    // =========================================
    MATERIAL_CONFIG: {
        milk: {
            name: 'Milk',
            inventoryWarning: '⚠ D7 stock below safety line',
            suggestion: `<strong>Market Context:</strong> In Q1 2026, raw milk procurement prices continue to decline as the industry adjusts capacity. Major producers like Mengniu reached record gross margins of 39.9%, but terminal dairy demand shows clear recovery signals.<br><br><strong>Procurement Advice:</strong> Current milk inventory will fall below the safety line (800kg) by <strong>April 5</strong>. Order <strong>2,400kg</strong> from regional suppliers before <strong>April 3</strong>. Given declining raw milk prices, negotiate a bulk price of <strong>¥11.2/kg</strong> (3.6% below current), saving emergency procurement costs of <strong>¥6,800</strong> and avoiding ≈<strong>¥15,600</strong> in lost sales from stockouts.<br><br><strong>Risk Note:</strong> Qingming holiday (4/4-4/6) demand expected to rise 15%, reserve an extra 400kg safety stock.`
        },
        lemon: {
            name: 'Lemon',
            inventoryWarning: '✓ Stock Sufficient',
            suggestion: `<strong>Market Context:</strong> In 2026, the tea beverage market exceeds ¥360B, with lemon tea growing 15.8%. Currently in peak lemon season with Sichuan Anyue and Yunnan regions at 12% higher output, driving seasonal price decline.<br><br><strong>Procurement Advice:</strong> Stock is sufficient and prices are at annual lows with room to drop further. Delay bulk purchase to <strong>April 5</strong>, when prices may reach <strong>¥7.8/kg</strong>, saving <strong>¥4,200</strong> per order. Also consider locking in concentrated lemon juice (longer shelf life) for summer peak season.<br><br><strong>QC Note:</strong> Recent heavy rainfall reported in some regions; check fruit skin integrity and moisture content during receiving.`
        },
        sugar: {
            name: 'Syrup',
            inventoryWarning: '✓ Normal',
            suggestion: `<strong>Market Context:</strong> Domestic white sugar spot price holds near 5,445 yuan/ton with only 0.15% weekly decline. Domestic output expected >10M tons with ample supply. International raw sugar fell below 15 cents/lb, reducing import costs.<br><br><strong>Procurement Advice:</strong> Syrup demand is stable, prices steady. Maintain current procurement rhythm (2 batches/week, 600L each), no need to stockpile. If a supplier offers a <strong>quarterly price-lock contract</strong>, consider signing — current prices are in the 2-year low-to-mid range.<br><br><strong>Alternative:</strong> Evaluate erythritol substitution for "sugar-free" trend. Some pilot stores already testing zero-calorie syrup SKUs.`
        },
        tea: {
            name: 'Tea',
            inventoryWarning: '⚠ Price Rising Continuously',
            suggestion: `<strong>Market Context:</strong> 2026 spring tea season is in full swing with pre-Qingming teas hitting the market. Prices are stable vs. last year, but demand for premium loose-leaf tea (for tea shops) is rising sharply, with some popular regions already seeing buying frenzies.<br><br><strong>Procurement Advice:</strong> Tea prices have risen for 3 consecutive weeks, expected to peak in mid-April. Strongly recommend <strong>locking in purchases now</strong>: Black tea (Dian/Qi) <strong>500kg</strong>, Green tea <strong>200kg</strong>, Oolong <strong>100kg</strong> at current avg. ¥85/kg, avoiding potential price increase losses of <strong>¥5,440</strong>.<br><br><strong>Supply Chain Tip:</strong> Establish long-term partnerships with origin cooperatives, bypassing middlemen can reduce costs by 8-12%.`
        },
        cup: {
            name: 'Cups',
            inventoryWarning: '✓ Normal',
            suggestion: `<strong>Market Context:</strong> Disposable cups and packaging market well-supplied, PP/PET material prices stable to declining. Environmental policies drive biodegradable material adoption, PLA cup prices down ~15% YoY, approaching conventional material costs.<br><br><strong>Procurement Advice:</strong> Cup/lid/straw inventory ample, 12-day supply at current consumption. Maintain <strong>weekly restocking</strong>. If not yet switched to biodegradable, trial <strong>PLA cold cups</strong> next cycle (price gap down to ¥0.03/unit), balancing cost and brand ESG image.<br><br><strong>Packaging Upgrade:</strong> Consider co-branded cup sleeve designs for Q2, leveraging AIGC marketing module for IP content.`
        },
        ice: {
            name: 'Ice',
            inventoryWarning: '⚠ Peak Season Price Alert',
            suggestion: `<strong>Market Context:</strong> Late March temperatures rising fast, ice demand entering rapid growth. Purchase price already up from ¥2.5 to ¥2.8/kg (+12%) in 2 weeks, expected to break ¥3.2/kg by mid-April peak. Last year's peak reached ¥3.8/kg.<br><br><strong>Procurement Advice:</strong> <strong>Immediately</strong> sign <strong>April-September supply agreements</strong> with 2-3 major ice factories, lock in avg. <strong>¥2.5/kg</strong> (34% below peak), saving <strong>¥51,300</strong> over 6 months. Add <strong>2 ice storage units</strong> (+800kg daily capacity) at Pudong sub-warehouse to reduce delivery frequency and melt loss.<br><br><strong>Contingency:</strong> Maintain contacts with 3 backup suppliers for extreme heat days, ensuring flexible capacity up to 70,000kg/day.`
        }
    },

    // =========================================
    // RISK_EVENTS 英文版
    // =========================================
    RISK_EVENTS: [
        {
            gaugeLabel: 'Low Risk',
            kpis: { inventory: { val: 'Normal' } },
            alerts: [],
            timeline: { text: 'Full chain scan started, all systems normal' }
        },
        {
            gaugeLabel: 'Medium Risk',
            alerts: [
                { title: 'Delivery Delay Warning', desc: '3 Pudong delivery routes delayed 15-25 min due to morning rush hour traffic' }
            ],
            timeline: { text: 'Pudong delivery delay detected, logistics on-time rate declining' }
        },
        {
            gaugeLabel: 'High Risk',
            kpis: { inventory: { val: 'Alert' } },
            alerts: [
                { title: 'Inventory Emergency Alert', desc: 'Pudong warehouse milk stock 420kg, tomorrow demand 680kg, gap 260kg' },
                { title: 'Delivery Delay Escalated', desc: '5 Pudong routes affected, average delay expanded to 30 min' }
            ],
            timeline: { text: 'Pudong warehouse milk stock critical, emergency alert triggered' }
        },
        {
            gaugeLabel: 'Recovering',
            kpis: { inventory: { val: 'Rebalancing' } },
            alerts: [
                { title: 'AI Rebalancing Executed', desc: 'Puxi central → Pudong warehouse emergency milk transfer 300kg, ETA 2 hours' }
            ],
            timeline: { text: 'AI auto-executed cross-warehouse rebalancing, delivery normalizing' }
        }
    ],

    // =========================================
    // 物料预测分析步骤
    // =========================================
    PREDICT_STEPS: [
        'Loading historical data...',
        'Analyzing weather impact...',
        'Analyzing holiday effects...',
        'Running LSTM time-series model...',
        'Running XGBoost ensemble...',
        'Generating forecast report...'
    ],

    // =========================================
    // ChatBI 图表英文内容
    // =========================================
    CHART_CONFIGS: {
        salesWarning: { title: 'Weekly Store Sales Comparison' },
        supplyForecast: { title: 'Lemon Demand & Supply Forecast' },
        efficiency: { title: 'Store Efficiency Ranking' },
        diagnosis: { title: 'Business Health Dashboard' },
        defaultChart: { title: 'Data Overview' }
    }
};
