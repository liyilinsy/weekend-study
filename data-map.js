/* ============================================================
 * 题型地图数据（长期资产，随批次扩充，不随周轮换）
 * 来源：《核心考点·数学八上》（教师用书）、《物理大培优·八上》
 * 字段：name 题型 / trig 触发词 / entry 入口 / combo 常联姻
 *       weak:true=天然薄弱标记 / star:true=高频标记
 * ============================================================ */
window.TYPE_MAP = {
  updated: "2026-09-20",
  books: [
    { id: "math8a", name: "核心考点·数学·人教版八上", status: "第十二、十三章已提炼（首批）；十一、十四、十五章待续" },
    { id: "phys8a", name: "物理大培优·八上", status: "待第二批提炼" }
  ],
  subjects: [
    { subject: "数学", chapters: [
      { chapter: "第十二章 全等三角形", note: "她证明格式薄弱·中考第18题对标", sections: [
        { section: "12.1-12.2 全等概念·性质·判定", types: [
          { name: "找条件证全等", trig: "证明△ABC≌△DEF", entry: "数已知边角→选判定：两边找夹角SAS/第三边SSS；两角找夹边ASA/任一边AAS；Rt△记HL", combo: "中垂线、角平分线、平行线导角", weak: true },
          { name: "挖隐含条件", trig: "图形有公共边/公共角/对顶角", entry: "三大隐含条件先圈出来再开证，每个∵都带依据", combo: "倍长中线、截长补短（提高）", weak: true },
          { name: "二次全等（链式证明）", trig: "先证…再证…", entry: "第一对全等导出边/角→作为第二对的条件", combo: "等腰判定、平行判定" },
          { name: "添加辅助线型", trig: "点D是BC中点/BD平分", entry: "倍长中线（延长至等长）或作双垂线", combo: "中线、角平分线模型" },
          { name: "旋转/动图全等", trig: "绕点…旋转/正方形中", entry: "旋转全等（SAS找旋转角）", combo: "坐标系、正多边形（压轴）", star: true }
        ]},
        { section: "12.3 角平分线的性质与判定", types: [
          { name: "性质求距离/证线段等", trig: "角平分线+两垂线段", entry: "到两边距离相等，直接用不再证全等", combo: "面积法、全等", star: true },
          { name: "判定证角平分线", trig: "到两边距离相等→证平分", entry: "反用性质；或作垂线证全等", combo: "HL、等腰三线合一" },
          { name: "尺规作角平分线", trig: "用尺规作…", entry: "以O为圆心两弧交两边→等弧→连线（保留痕迹）", combo: "作图规范" }
        ]}
      ]},
      { chapter: "第十三章 轴对称（本周进度）", note: "她本周 15 道错题全在此章", sections: [
        { section: "13.1.1 轴对称", types: [
          { name: "识别轴对称图形", trig: "轴对称图形（选择）", entry: "沿某直线翻折能重合，找对称轴", combo: "生活图形辨析（中考第1题常客）" },
          { name: "性质求角/边", trig: "对应点/对应边/翻折", entry: "对应边角相等；对应点连线被对称轴垂直平分", combo: "坐标系对称点坐标" },
          { name: "对称轴条数问题", trig: "共有几条对称轴", entry: "等腰1条/等边3条/正n边形n条", combo: "组合图形、字母数字辨析" }
        ]},
        { section: "13.1.2 垂直平分线 ⭐", types: [
          { name: "性质求长度", trig: "垂直平分+求…长", entry: "连线得等腰→等边代换", combo: "周长转化", weak: true },
          { name: "性质求角度", trig: "垂直平分+角度", entry: "连线得等腰→等边对等角→外角/内角和", combo: "等腰、外角定理" },
          { name: "判定证中垂/格点找点", trig: "PA=PB（到两点等距）", entry: "等距⇒中垂线（性质反用）→数格点验证", combo: "格点找点、证垂直", weak: true },
          { name: "尺规作中垂线", trig: "用尺规作…", entry: "两次交叉弧取交点", combo: "格点作图、作对称点" }
        ]},
        { section: "13.2 画轴对称图形", types: [
          { name: "格点作对称图形", trig: "画出…的轴对称图形", entry: "关键点→逐点对称→顺次连线", combo: "格点作高、作中垂线", weak: true },
          { name: "坐标系对称点坐标", trig: "点(x,y)关于x轴/y轴对称", entry: "x轴→y变号；y轴→x变号", combo: "一次函数图象对称", star: true }
        ]},
        { section: "13.3.1 等腰性质 ⭐", types: [
          { name: "等边对等角求角度", trig: "AB=AC+给角度", entry: "等角+内角和/外角定理", combo: "外角、平行线" },
          { name: "三线合一", trig: "BD是中线/AD平分顶角+等腰", entry: "三线合一→垂直+平分一次到手", combo: "折叠、中垂线", weak: true },
          { name: "等腰分类讨论", trig: "一个角是…/中线分周长…", entry: "①分两类各解一次 ②三边关系检验", combo: "方程、三边关系", weak: true },
          { name: "性质+中垂线/平行综合", trig: "等腰+其他线", entry: "角/边转化链", combo: "13.1.2、平行线" }
        ]},
        { section: "13.3.2 等腰判定 ⭐", types: [
          { name: "等角对等边证等腰", trig: "证AB=AC+角条件", entry: "证∠B=∠C即收工", combo: "全等导角" },
          { name: "角平分线+平行出等腰", trig: "平分∠ + ∥", entry: "平行导角+平分等角→等角对等边", combo: "双平行、翻折", star: true },
          { name: "角平分线两距相等", trig: "P在角平分线上+两垂线段", entry: "到两边距离相等→PE=PF", combo: "AAS、面积法" },
          { name: "等腰存在性计数", trig: "几个点P使△ABP为等腰", entry: "分三类：PA=PB/PA=AB/PB=AB（两圆一线）", combo: "坐标系、格点" }
        ]},
        { section: "13.3.3 等边/含30°角 ⭐（下周预习重点）", types: [
          { name: "等边判定", trig: "等腰+60°", entry: "第三条判定路（等腰+一个60°⇒等边）最常考", combo: "三角相等、三边相等", star: true },
          { name: "含30°直角三角形求边", trig: "Rt△+30°/60°", entry: "30°对边=斜边一半", combo: "勾股、折叠、中点", weak: true },
          { name: "反用判定", trig: "直角边=斜边一半", entry: "→它对角=30°", combo: "等边对折、倍长中线" }
        ]},
        { section: "13.4 最短路径 ⭐", types: [
          { name: "将军饮马基本型", trig: "PA+PB最小+直线", entry: "对称化折为直→连线段", combo: "勾股求值、坐标系", weak: true },
          { name: "路径差最大型", trig: "PA−PB最大", entry: "差最大=延长线交点（异侧直连）", combo: "三角不等式" },
          { name: "造桥选址", trig: "桥长MN=d（定长）", entry: "平移桥长+对称", combo: "平移变换" },
          { name: "台球/光的反射", trig: "反弹/反射后…", entry: "反射=沿界面作对称", combo: "物理光路（跨科）", star: true }
        ]}
      ]}
    ]},
    { subject: "物理", chapters: [
      { chapter: "大培优·八上", note: "待第二批提炼（说一声\"继续物理\"即开工）", sections: [] }
    ]}
  ]
};
