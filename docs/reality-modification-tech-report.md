# 绑定现实，修改现实 - 科技预测研究报告

**藏子世间项目技术可行性分析**

---

## 1. 执行摘要

"绑定现实，修改现实"是一种基于行为数据→叙事化引擎→数字孪生的技术架构，通过将用户的现实行为数字化，利用LLM生成个性化叙事内容，并通过数字世界反馈激励用户改进现实生活。

**核心价值主张**：通过游戏化和叙事化手段，将效率工具的实用性、社交平台的连接性、RPG游戏的沉浸感融合，创造一个新的产品类别——"生活叙事化平台"。

**时机判断**：
- 技术成熟度：LLM能力已达可商业化水平（GPT-4o等）
- 硬件基础：可穿戴设备普及率突破35%，行为数据采集成本趋零
- 市场需求：情绪管理应用收入爆发（Finch月流水300万美元）
- 用户习惯：Z世代对生活游戏化接受度高，习惯追踪应用市场规模$43.1B

**差异化定位**：
- 不同于Habitica（纯虚拟积分）、Forest（单维度番茄钟）、Notion（纯工具）
- 核心创新：现实行为锚定 + AI叙事化引擎 + 社交窥探层 + 入侵机制
- 不仅是记录习惯，而是将习惯转化为可分享的"人生故事"

---

## 2. 技术趋势分析

### 2.1 AR/VR/MR发展现状与瓶颈

**市场规模**：
- 2024年AR/VR/MR市场规模：$58.98B
- 预计2034年：$826.63B，CAGR 39.1%
- 2025年AR/VR头显出货：39M台（2024年29.3M，增长33%）

**关键趋势**：
- **分化明显**：VR设备同比下降14%，AR设备增长37%，AI眼镜增长119%
- **企业应用加速**：2025年企业用户占比60%，医疗、制造、零售成为主要驱动力
- **技术瓶颈**：硬件舒适度、内容生态、 价格壁垒

### 2.2 AI Agent从对话→行动→现实的演进路径

**市场规模**：
- 2024年AI Agent市场：$5.68B
- 预计2025年：$8.34B（增长47%）
- 预计2029年：$38.52B，CAGR 61.4%

**演进阶段**：
1. 对话阶段（2022-2023）：ChatGPT等LLM仅支持文本生成
2. 行动阶段（2024-2025）：Agent支持跨App操作、工具调用
3. 现实绑定阶段（2025+）：与可穿戴设备、IoT深度集成

### 2.3 现实行为数字化的技术成熟度

**可穿戴设备**：全球市场规模2024年$41.07B，预计2030年$75.98B

**手机传感器**：加速度计、陀螺仪、光学心率、GPS，通过CoreMotion/HealthKit/Google Fit API零成本获取

### 2.4 LLM + 行为数据 = 叙事化引擎的技术可行性

**技术验证**：PANGeA（2024）使用LLM生成RPG叙事，GENEVA（2024）微软使用GPT-4生成分支叙事图

**技术选型**：
- LLM：GPT-4o / Claude 3.5 ✅
- 记忆：Supabase Vector ✅
- 模板：Jinja2 + 规则引擎 ✅

### 2.5 Web/PWA vs 原生APP技术选型

**建议**：PWA优先 → 混合架构 → 原生APP

---

## 3. 市场趋势分析

### 3.1 习惯追踪/效率工具市场规模

- 习惯追踪应用：$2.5B（2024）
- 游戏化应用：$43.1B（2024），预计2030年$174.1B
- 健康游戏化：$4.23B（2024），预计2035年$42.03B

**头部产品数据**：

| 产品 | MAU | 月收入 | D1/D7留存 |
|------|-----|--------|-----------|
| Habitica | 4M+ | 需验证 | D7 ~30% |
| Forest | 10M+ | 需验证 | D7 ~25% |
| Finch | 10M | $3M | D1 54%, D7 37% |

### 3.2 Z世代对"生活游戏化"的接受度

- 83%员工认为游戏化训练提升知识保留率
- Finch D7留存37%，远高于行业平均20-25%
- 游戏化健身应用留存率比传统健身应用高40%

### 3.3 社交+效率融合产品的空白

市场空白：社交窥探层缺失、现实锚定缺失、叙事化引擎空白

---

## 4. 竞品深度拆解

| 竞品 | 游戏化 | 社交 | 现实锚定 | 叙事化 | 核心问题 |
|------|--------|------|----------|--------|----------|
| Habitica | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ | 纯虚拟、易刷分 |
| Forest | ⭐⭐ | ⭐ | ⭐⭐ | ⭐ | 单维度、无社交 |
| Finch | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | 手动记录、无窥探 |
| Notion | ⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐ | 纯工具、无激励 |

**突破口**：现实锚定 + AI叙事化 + 社交窥探层 + 入侵机制

---

## 5. 核心技术架构

### 5.1 完整链路

```
数据采集层 → 行为数据仓库 → 叙事化引擎 → 用户界面层

可穿戴/手机传感器/手动输入 → Supabase → LLM生成叙事 → PWA/Widget
```

### 5.2 叙事化引擎技术实现

**技术栈**：
- LLM：GPT-4o-mini（成本$0.15/M tokens）
- 记忆：Supabase Vector (pgvector)
- 模板：Jinja2 + 规则引擎

### 5.3 用户系统（Supabase Auth）

**价格对比**：Cognito $220/月 vs Supabase $25/月（100K MAU）

### 5.4 成本估算（100K MAU）

| 项目 | 月成本 |
|------|--------|
| LLM API | $75-250 |
| Supabase | $25 |
| 数据存储 | $2.1 |
| CDN带宽 | $90 |
| **总计** | **$192-367** |

---

## 6. 发展路径

### Phase 1（0-3月）：MVP核心功能
- 用户系统、行为采集、叙事化引擎、基础编年史
- 目标：MAU 1K，D7留存≥25%

### Phase 2（3-6月）：社交+窥探层
- 好友系统、窥探层、分享机制
- 目标：MAU 10K，DAU/MAU≥30%

### Phase 3（6-12月）：入侵机制+联盟
- 行为挑战、联盟系统、实时通信
- 目标：MAU 100K

### Phase 4（12月+）：开放平台/API
- B2B解决方案、企业客户
- 目标：ARR $1M+

---

## 7. 风险评估

| 风险类型 | 概率 | 影响 | 缓解方案 |
|----------|------|------|----------|
| LLM成本 | 中 | 高 | 多模型策略、缓存 |
| 隐私合规 | 高 | 高 | 数据最小化、GDPR合规 |
| CAC上升 | 高 | 高 | 病毒式增长 |
| 大厂复制 | 中 | 高 | 护城河构建 |

---

## 8. 投资逻辑

**单位经济模型**：
- CAC：$15-25
- ARPU：$5-8/月
- LTV：$90-192
- LTV/CAC：3.6-12.8（健康）

**退出路径**：被腾讯/字节收购 或 IPO

---

## 9. 落地执行方案：两个人（主人+Kael）的MVP实现路径

> **研究结论反推**：基于前述研究，MVP的核心是验证"现实行为→叙事化编年史"闭环。用户需要：创建宇宙→绑定行为→看到编年史。其他功能（社交、LLM生成、传感器集成）都是后续迭代项。

### 9.1 现实约束

| 资源 | 现状 | 限制 |
|------|------|------|
| 人力 | 主人（非全职）+ Kael | 主人周末有时间，Kael可独立写代码 |
| 预算 | 零预算 | 只能用免费资源 |
| 时间 | 周日晚上前必须上线 | 仅2-3个整天可用 |
| 技术栈 | GitHub Pages + Supabase + 免费AI | 必须基于现有资源 |

### 9.2 MVP功能边界

#### 必须有的功能（第一版）
1. ✅ 用户注册/登录（邮箱）
2. ✅ 创建"宇宙"（设定角色名、主题）
3. ✅ 手动记录行为（从预设列表选择）
4. ✅ 生成编年史（模板驱动，暂不调LLM）
5. ✅ 查看历史编年史（时间轴）

#### 可以砍掉的功能（后续迭代）
- ❌ 可穿戴设备集成（太复杂，先手动）
- ❌ LLM实时生成（成本+延迟，先用模板）
- ❌ 社交窥探层（先跑通单人闭环）
- ❌ 入侵机制（Phase 3功能）
- ❌ 多语言支持（先中文）
- ❌ Widget（Phase 2）

### 9.3 技术方案选择

#### 数据存储：localStorage优先，Supabase后续

```javascript
// 简单数据结构，直接存localStorage
const userData = {
  universe: { name: "时空冒险者", theme: "科幻" },
  behaviors: [
    { type: "run", value: { distance: 5000 }, timestamp: "2025-01-15T07:00:00Z" }
  ],
  chronicles: [
    { date: "2025-01-15", narrative: "今天晨跑5公里..." }
  ]
};
localStorage.setItem("zishijian_user", JSON.stringify(userData));
```

**原因**：
- Supabase注册需要主人明天处理，Kael不能等
- localStorage可以让Kael今晚就开始写前端
- 数据量小（个人数据），localStorage完全够用
- 后续迁移到Supabase成本低

#### 叙事引擎：纯模板 + 规则

```javascript
// 模板示例（第一版）
const narrativeTemplates = {
  run: {
    default: "今天{name}完成了{value}的晨跑，距离是{distance}公里。",
    streak: "连续第{streak}天晨跑！{name}已经进化成晨间跑神了。",
    breakthrough: "今天创造了个人最佳！{name}的跑步距离达到了惊人的{distance}公里！"
  },
  meditate: {
    default: "{name}今天完成了{value}分钟的冥想。",
    streak: "连续第{streak}天冥想，内心的平静正在累积。"
  }
  // ... 更多模板
};

// 规则引擎
function generateNarrative(behavior, userContext) {
  const template = behavior.streak > 7 
    ? narrativeTemplates[behavior.type].streak 
    : narrativeTemplates[behavior.type].default;
  
  return template
    .replace("{name}", userContext.name)
    .replace("{value}", behavior.value)
    .replace("{distance}", (behavior.value / 1000).toFixed(1))
    .replace("{streak}", behavior.streak);
}
```

**原因**：
- LLM调用有成本和延迟（即使免费额度也有）
- 模板驱动响应快、无成本、可预测
- 后续加上LLM只是替换generateNarrative函数
- 模板可以快速迭代，不依赖API

#### 行为采集：预设列表 + 手动输入

```javascript
// 预设行为类型
const behaviorTypes = [
  { id: "run", name: "晨跑", icon: "🏃", unit: "公里", valueType: "number" },
  { id: "meditate", name: "冥想", icon: "🧘", unit: "分钟", valueType: "number" },
  { id: "read", name: "阅读", icon: "📚", unit: "页", valueType: "number" },
  { id: "sleep_early", name: "早睡", icon: "😴", unit: "次", valueType: "count" },
  { id: "water", name: "喝水", icon: "💧", unit: "杯", valueType: "number" },
  // ... 更多
];

// 手动记录UI
// 用户点击行为类型 → 输入数值 → 确认 → 保存
```

**传感器API注意**：手机传感器（GPS、加速度计）需要HTTPS和用户授权，复杂度高，第一版先不做。

### 9.4 当前网站功能复用

**已有功能**：
- ✅ 叙事页面结构（可以直接复用CSS/组件）
- ✅ 三语切换（保留，但第一版先中文）
- ✅ 导航系统（复用）
- ✅ 响应式布局（复用）

### 9.5 时间线（小时级）

#### 现在 → 周五早上（Kael独立工作）

**目标**：完成核心前端 + localStorage逻辑

| 时间 | 任务 | 负责人 | 产出 |
|------|------|--------|------|
| 现在-02:00 | 项目结构搭建，创建新页面路由 | Kael | /universe, /record, /chronicle |
| 02:00-04:00 | 宇宙创建页面（表单+预览） | Kael | CreateUniverse.jsx |
| 04:00-06:00 | 行为记录页面（预设列表+输入） | Kael | RecordBehavior.jsx |
| 06:00-08:00 | 叙事模板引擎（JS实现） | Kael | narrativeEngine.js |
| 08:00-10:00 | 编年史页面（时间轴展示） | Kael | ChroniclePage.jsx |
| 10:00-12:00 | localStorage数据层 | Kael | dataStore.js |
| 12:00-14:00 | 集成测试，修复Bug | Kael | 可运行的MVP |
| 14:00-16:00 | 样式优化，移动端适配 | Kael | 响应式UI |
| 16:00-18:00 | 主人测试，反馈修复 | 主人+Kael | Bug修复 |

#### 周五白天（主人处理后台事务）

| 时间 | 任务 | 负责人 | 产出 |
|------|------|--------|------|
| 主人白天 | 注册Supabase账号，创建项目 | 主人 | Supabase项目 |
| 主人白天 | 启用Auth（邮箱登录） | 主人 | Auth配置完成 |
| 主人白天 | 创建数据库表结构 | 主人 | SQL执行完成 |
| 主人白天 | 获取API Keys，发给Kael | 主人 | .env配置 |
| 主人晚上 | Supabase接入测试 | Kael | 数据写入验证 |

#### 周六（集成 + 完善）

| 时间 | 任务 | 负责人 | 产出 |
|------|------|--------|------|
| 上午 | localStorage → Supabase迁移 | Kael | 数据层重构 |
| 下午 | 真实用户注册流程测试 | 主人 | 完整注册体验 |
| 傍晚 | 社交功能最小版（分享编年史到链接） | Kael | 可分享的URL |
| 晚上 | Bug修复 + 性能优化 | Kael | 稳定版MVP |

#### 周日（最后冲刺 + 上线）

| 时间 | 任务 | 负责人 | 产出 |
|------|------|--------|------|
| 上午 | 最后一轮测试 | 主人 | 测试报告 |
| 下午 | 修复致命Bug | Kael | 稳定版 |
| 傍晚 | 准备上线文档 | 主人 | 用户指南 |
| 晚上 | **正式上线** | 两者 | zishijian.cc/universe |

### 9.6 具体代码方案

#### 数据模型（Supabase表结构）

```sql
-- 用户表
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  universe_name TEXT,
  universe_theme TEXT DEFAULT 'adventure',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 行为记录表
CREATE TABLE behaviors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  behavior_type TEXT NOT NULL,
  value NUMERIC,
  recorded_at TIMESTAMPTZ DEFAULT NOW()
);

-- 编年史表
CREATE TABLE chronicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  chronicle_date DATE NOT NULL,
  narrative TEXT,
  emotion_tags TEXT[],
  behavior_summary JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS策略
ALTER TABLE behaviors ENABLE ROW LEVEL SECURITY;
ALTER TABLE chronicles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own data" ON behaviors
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can CRUD own chronicles" ON chronicles
  FOR ALL USING (auth.uid() = user_id);
```

#### Supabase客户端初始化

```javascript
// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 认证
export async function signUp(email, password, universeName, theme) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) throw error
  
  // 创建宇宙配置
  const { user } = data
  const { error: insertError } = await supabase
    .from('users')
    .insert({ id: user.id, universe_name: universeName, universe_theme: theme })
  
  return { user, error: insertError }
}

export async function signIn(email, password) {
  return await supabase.auth.signInWithPassword({ email, password })
}
```

#### 叙事引擎（模板驱动版）

```javascript
// narrativeEngine.js

const templates = {
  behaviors: {
    run: {
      normal: [
        "{name}今天的晨跑表现稳健，{distance}公里，用时{time}分钟。",
        "{name}迈开步伐，完成{distance}公里的跑步训练。"
      ],
      streak: [
        "连续第{streak}天晨跑！{name}已经把这个习惯刻进DNA了。",
        "{streak}天不间断！{name}的晨跑 streak 正在创造传奇。"
      ],
      breakthrough: [
        "今天突破了！{name}的跑步距离达到惊人的{distance}公里！",
        "新纪录诞生！{name}超越自我，完成{distance}公里的壮举。"
      ]
    },
    meditate: {
      normal: [
        "{name}今天进行了{value}分钟的冥想，内心更加平静。",
        "静坐{value}分钟，{name}与自己的内心对话。"
      ],
      streak: [
        "连续第{streak}天冥想，{name}的内心越来越宁静。",
        "冥想已经成为{name}生活的一部分，连续{streak}天。"
      ]
    },
    read: {
      normal: [
        "{name}今天阅读了{value}页，知识的积累在继续。",
        "书中自有黄金屋，{name}今天读了{value}页。"
      ],
      streak: [
        "连续第{streak}天阅读，{name}正在成为一个博学的人。"
      ]
    },
    sleep_early: {
      normal: [
        "{name}今天选择早睡，给身体充足的休息时间。",
        "早睡早起，{name}正在培养健康的生活习惯。"
      ],
      streak: [
        "连续第{streak}天早睡！{name}的作息越来越规律。"
      ]
    }
  },
  
  dailySummary: {
    active: "{name}今天过得很充实，完成了{total_behaviors}项挑战。",
    moderate: "{name}今天完成了{total_behaviors}项任务，明天继续加油。",
    low: "{name}今天比较轻松，完成了{total_behaviors}项。明天要更努力哦。"
  }
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getStreak(behaviors, type) {
  // 计算连续天数
  return 1;
}

function isBreakthrough(behavior) {
  // 判断是否创造个人最佳
  return false;
}

export function generateNarrative(behavior, userContext) {
  const { type, value, recorded_at } = behavior;
  const { name } = userContext;
  
  const streak = getStreak(behavior, type);
  const isBreak = isBreakthrough(behavior);
  
  let narrative;
  
  if (isBreak) {
    narrative = pickRandom(templates.behaviors[type].breakthrough);
  } else if (streak > 1) {
    narrative = pickRandom(templates.behaviors[type].streak);
  } else {
    narrative = pickRandom(templates.behaviors[type].normal);
  }
  
  return narrative
    .replace(/{name}/g, name)
    .replace(/{value}/g, value)
    .replace(/{distance}/g, (value / 1000).toFixed(1))
    .replace(/{streak}/g, streak)
    .replace(/{time}/g, Math.round(value / 60));
}

export function generateDailySummary(behaviors, userContext) {
  const total = behaviors.length;
  let level = 'low';
  if (total >= 3) level = 'active';
  else if (total >= 1) level = 'moderate';
  
  return templates.dailySummary[level]
    .replace(/{name}/g, userContext.name)
    .replace(/{total_behaviors}/g, total);
}
```

#### 行为记录组件

```jsx
// RecordBehavior.jsx
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { generateNarrative } from '@/lib/narrativeEngine';

const behaviorTypes = [
  { id: 'run', name: '晨跑', icon: '🏃', unit: '公里', multiplier: 1000 },
  { id: 'meditate', name: '冥想', icon: '🧘', unit: '分钟', multiplier: 1 },
  { id: 'read', name: '阅读', icon: '📚', unit: '页', multiplier: 1 },
  { id: 'sleep_early', name: '早睡', icon: '😴', unit: '次', multiplier: 1 },
  { id: 'water', name: '喝水', icon: '💧', unit: '杯', multiplier: 1 },
];

export function RecordBehavior() {
  const [selectedType, setSelectedType] = useState(null);
  const [value, setValue] = useState('');
  const [saving, setSaving] = useState(false);
  
  async function handleSubmit() {
    if (!selectedType || !value) return;
    
    setSaving(true);
    
    const behavior = {
      type: selectedType.id,
      value: parseFloat(value) * selectedType.multiplier,
      recorded_at: new Date().toISOString()
    };
    
    const { name } = getUserContext(); // 从context获取
    
    const narrative = generateNarrative(behavior, { name });
    
    const { error } = await supabase
      .from('behaviors')
      .insert({ 
        behavior_type: behavior.type,
        value: behavior.value,
        recorded_at: behavior.recorded_at
      });
    
    if (!error) {
      await supabase.from('chronicles').insert({
        chronicle_date: new Date().toISOString().split('T')[0],
        narrative,
        behavior_summary: { [behavior.type]: behavior.value }
      });
      
      alert('记录成功！' + narrative);
    }
    
    setSaving(false);
  }
  
  return (
    <div className="record-page">
      <h2>记录今日行为</h2>
      
      <div className="behavior-grid">
        {behaviorTypes.map(type => (
          <button
            key={type.id}
            className={selectedType?.id === type.id ? 'selected' : ''}
            onClick={() => setSelectedType(type)}
          >
            <span className="icon">{type.icon}</span>
            <span className="name">{type.name}</span>
          </button>
        ))}
      </div>
      
      {selectedType && (
        <div className="value-input">
          <input
            type="number"
            placeholder={`输入${selectedType.unit}`}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <span>{selectedType.unit}</span>
        </div>
      )}
      
      <button 
        className="submit-btn"
        disabled={!selectedType || !value || saving}
        onClick={handleSubmit}
      >
        {saving ? '保存中...' : '确认记录'}
      </button>
    </div>
  );
}
```

### 9.7 上线检查清单

#### 上线前必须验证

| 检查项 | 状态 |
|--------|------|
| 页面可访问（zishijian.cc/universe） | ⬜ |
| 用户可注册（邮箱验证） | ⬜ |
| 行为可记录 | ⬜ |
| 编年史可查看 | ⬜ |
| 移动端适配 | ⬜ |
| 加载时间 <3秒 | ⬜ |

#### 上线后观察

| 指标 | 目标 |
|------|------|
| 注册转化率 | >50% |
| 行为记录完成率 | >70% |
| 编年史查看率 | >80% |
| 用户反馈 | 收集3-5条真实反馈 |

### 9.8 后续迭代优先级

#### P0（必须做）
1. Supabase数据持久化（已有方案，本周完成）
2. 用户反馈收集机制
3. Bug修复

#### P1（应该做）
1. LLM叙事生成（用免费额度测试）
2. 连续天数计算
3. 统计数据面板

#### P2（可以做）
1. 行为类型自定义
2. 分享功能
3. 社交关注（最小版）

#### P3（以后做）
1. 可穿戴设备集成
2. 入侵机制
3. 联盟系统
4. 多语言支持

### 9.9 主人需要做的事（清单）

| 时间 | 任务 | 备注 |
|------|------|------|
| 周五白天 | 注册Supabase账号 | https://supabase.com |
| 周五白天 | 创建项目，启用Auth | 用邮箱provider |
| 周五白天 | 执行SQL创建表 | 复制上面的SQL |
| 周五晚上 | 提供API Keys给Kael | .env配置 |
| 周六 | 测试注册流程 | 真实邮箱 |
| 周六 | 测试行为记录 | 完整闭环 |
| 周日 | 准备上线文档 | 用户指南 |
| 周日 | 收集1-2个真实用户反馈 | 朋友圈/群 |

### 9.10 Kael能独立完成的事（不需要主人）

| 模块 | 状态 | 说明 |
|------|------|------|
| 前端页面开发 | ✅ | React组件编写 |
| localStorage数据层 | ✅ | 已有方案 |
| 叙事引擎 | ✅ | 模板+规则 |
| 样式和UI | ✅ | CSS/响应式 |
| GitHub Pages部署 | ✅ | 自动触发 |
| Bug修复 | ✅ | 独立调试 |

**主人唯一需要提供的**：Supabase账号和API Keys

---

## 附录A：主人操作手册 - Supabase快速上手

### Step 1: 注册Supabase

1. 访问 https://supabase.com
2. 点击 "Start your project"
3. 用GitHub账号登录（推荐）或邮箱注册
4. 创建新项目：
   - Organization: 选择个人或创建
   - Name: `zishijian`
   - Database Password: 生成一个强密码，**保存下来**
   - Region: 选择离用户最近的（如Singapore）
5. 等待1-2分钟，项目创建完成

### Step 2: 获取API Keys

1. 进入项目 Dashboard
2. 点击左侧 **Settings** → **API**
3. 找到以下信息：
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon/public** key: `eyJhbGc...`（以 `eyJ` 开头）
4. 创建 `.env` 文件：

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

### Step 3: 创建数据库表

1. 点击左侧 **SQL Editor**
2. 点击 **New query**
3. 粘贴以下SQL并点击 **Run**:

```sql
-- 用户宇宙表
CREATE TABLE universe (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  theme TEXT DEFAULT 'adventure',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 行为记录表
CREATE TABLE behaviors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  behavior_type TEXT NOT NULL,
  value NUMERIC,
  recorded_at TIMESTAMPTZ DEFAULT NOW()
);

-- 编年史表
CREATE TABLE chronicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  chronicle_date DATE NOT NULL,
  narrative TEXT,
  emotion_tags TEXT[],
  behavior_summary JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 启用RLS
ALTER TABLE universe ENABLE ROW LEVEL SECURITY;
ALTER TABLE behaviors ENABLE ROW LEVEL SECURITY;
ALTER TABLE chronicles ENABLE ROW LEVEL SECURITY;

-- 创建RLS策略
CREATE POLICY "Users can CRUD own universe" ON universe
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can CRUD own behaviors" ON behaviors
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can CRUD own chronicles" ON chronicles
  FOR ALL USING (auth.uid() = user_id);

-- 触发器：创建用户时自动创建宇宙
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.universe (user_id, name)
  VALUES (new.id, '时空旅行者');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### Step 4: 启用邮箱登录

1. 点击左侧 **Authentication** → **Providers**
2. 找到 **Email** 点击 **Configure**
3. 确认以下设置：
   - ✅ Enable Email Signup
   - ✅ Enable Email Confirmations（建议开启，让用户验证邮箱）
4. 点击 Save

### Step 5: 把Keys发给Kael

把 `.env` 文件内容（或者直接发URL和Key）发给Kael，Kael会配置到项目中。

---

## 附录B：成本估算

| 项目 | 成本 | 说明 |
|------|------|------|
| 域名 | $10/年 | 已有 |
| Supabase | $0 | Free tier够用 |
| LLM API | $0 | 免费额度 |
| 托管 | $0 | GitHub Pages |
| **总计** | **$0** | 零预算可行 |

---

**报告撰写日期**：2025年1月
**更新日期**：2025年5月（增加落地执行方案）

---

## 执行原则重申

1. **先研究后落地**：第1-8章是扎实的可行性研究，不受落地限制影响
2. **落地反推研究**：第9章从研究结论出发，不是从"想做什么"出发
3. **最快最省**：用最快最省的方式做出东西，让用户来了再迭代
4. **不追求完美MVP**：追求"能跑的MVP"，用户能看到、能用、能给反馈
5. **区分优先级**：第一版必须有 vs 用户来了再说
6. **现实计算**：主人（非全职）+ Kael，零预算，用免费资源

---

**报告结束**
