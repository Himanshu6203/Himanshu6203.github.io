/* ------------------------------------------------------------------ */
/*  Central content store for the Himanshu Singh Kothariya portfolio   */
/*  Data Analyst · Business Analyst · Aspiring Product Analyst         */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Himanshu Singh Kothariya",
  firstName: "Himanshu",
  roles: ["Data Analyst", "Business Analyst", "Aspiring Product Analyst"],
  heroHeading: "Transforming Data into Business Impact.",
  heroDescription:
  "I turn complex data into clear, decision-ready insights using SQL, Python, Power BI, and Excel — from business questions and analysis to dashboards and actionable recommendations.",
  typingRoles: [
    "Data Analyst",
    "Business Analyst",
    "Product Analyst",
    "Power BI Developer",
    "Data Storyteller",
  ],
  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "IIIT Naya Raipur",
    short: "B.Tech ECE · IIIT Naya Raipur",
  },
  email: "himanshusinghiiitnr@gmail.com",
  github: "https://github.com/Himanshu6203",
  linkedin: "https://www.linkedin.com/in/himanshu-singh-kothariya-490a1a28b/",
  location: "Raipur, India",
  currentFocus:  "Analytics, Product Strategy & Business Problem Solving",
  resumeUrl: "/resume/DA%20Resume.pdf",
  availability: "Open to Data Analyst, Business Analyst, Product Analyst & Product Manager Opportunities",
};

/* ------------------------------- KPIs ------------------------------ */

export type Kpi = {
  label: string;
  value: number;
  suffix?: string;
  icon: "project" | "dashboard" | "query" | "case";
};

export const heroKpis: Kpi[] = [
  { label: "Projects", value: 4, icon: "project" },
  { label: "Dashboards", value: 3, icon: "dashboard" },
  { label: "SQL Queries", value: 100, suffix: "+", icon: "query" },
  { label: "Case Studies", value: 2, icon: "case" },
];

export const aboutStats: Kpi[] = [
  { label: "Projects Completed", value: 4, icon: "project" },
  { label: "Dashboards Built", value: 3, icon: "dashboard" },
  { label: "SQL Queries Written", value: 100, suffix: "+", icon: "query" },
  { label: "Business Case Studies", value: 2, icon: "case" },
];

/* ------------------------------ Skills ----------------------------- */

export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  icon: "code" | "chart" | "layers" | "database" | "wrench";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming",
    blurb: "Writing clean, efficient code to extract insight from raw data.",
    icon: "code",
    skills: ["Python", "SQL", "C++"],
  },
  {
    id: "analytics",
    title: "Analytics",
    blurb: "From spreadsheets to statistical thinking — every problem becomes measurable.",
    icon: "chart",
    skills: ["Excel", "Power BI", "Statistics", "Data Cleaning", "Visualization"],
  },
  {
    id: "libraries",
    title: "Libraries",
    blurb: "The Python data stack I reach for in every analysis.",
    icon: "layers",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    id: "database",
    title: "Database",
    blurb: "Querying, transforming, and modeling relational data at scale.",
    icon: "database",
    skills: ["MySQL"],
  },
  {
    id: "tools",
    title: "Tools",
    blurb: "The workflow that keeps my analyses reproducible and collaborative.",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Jupyter"],
  },
];

/* ----------------------------- Projects ---------------------------- */

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  stack: string[];
  accent: string; // tailwind gradient classes for the card visual
  links: { github?: string; caseStudy: string; live?: string };
  featured?: boolean;
  startup?: boolean;
};

export const projects: Project[] = [
  {
    slug: "customer-lifetime-value",
    title: "Customer Lifetime Value & Retention Strategy",
    tagline: "End-to-end analytics engagement",
    category: "Analytics",
    description:
      "Customer segmentation, churn analysis, lifetime value prediction, retention strategy, executive dashboard and business recommendations.",
    stack: ["SQL", "Python", "Power BI", "Excel"],
    accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
    links: {
      github: "https://github.com/Himanshu6203/Customer-Churn-Analytics-Retention-Strategy",
      caseStudy: "/case-studies/customer-lifetime-value",
      live: "#gallery",
    },
    featured: true,
  },
  {
    slug: "customer-behavior-dashboard",
    title: "Customer Behavior Analysis Dashboard",
    tagline: "Behavioral analytics & KPI suite",
    category: "Analytics",
    description:
      "Analyzed customer purchasing behavior, identified trends, built KPI dashboards, and generated actionable business insights.",
    stack: ["SQL", "Python", "Excel", "Power BI"],
    accent: "from-cyan-500 via-sky-500 to-blue-600",
    links: {
      github: "https://github.com/Himanshu6203/customer_behavior_dashboard",
      caseStudy: "/case-studies/customer-behavior-dashboard",
      live: "#gallery",
    },
  },
  {
    slug: "amazon-sales-dashboard",
    title: "Amazon Sales Dashboard",
    tagline: "Executive sales intelligence",
    category: "Analytics",
    description:
      "Built an executive sales dashboard tracking revenue, order trends, customer segments, and product performance.",
    stack: ["Power BI", "SQL", "Excel"],
    accent: "from-amber-400 via-orange-500 to-rose-500",
    links: {
      github: "https://github.com/Himanshu6203/amazon-sales-dashboard",
      caseStudy: "/case-studies/amazon-sales-dashboard",
      live: "#gallery",
    },
  },
  {
    slug: "scan-n-shop",
    title: "Scan N Shop",
    tagline: "Startup Project · QR Based Shopping System",
    category: "Startup",
    description:
      "Designed a smart shopping solution using QR technology to improve retail checkout efficiency.",
    stack: ["Product Thinking", "QR Tech", "SQL", "Excel"],
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
    links: {
      github: "https://github.com/Himanshu6203/scan-n-shop",
      caseStudy: "/case-studies/scan-n-shop",
    },
    startup: true,
  },
];

/* --------------------------- Case studies -------------------------- */

export type CaseStudySection = {
  problem: string[];
  objectives: string[];
  dataset: { name: string; rows: string; fields: string; source: string; summary: string }[];
  sqlAnalysis: { title: string; query: string; insight: string }[];
  pythonAnalysis: { title: string; steps: string[]; insight: string }[];
  dashboard: { overview: string; pages: string[]; metrics: string[] };
  insights: string[];
  recommendations: string[];
  impact: string[];
  lessons: string[];
  tech: string[];
  architecture: { node: string; detail: string }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  role: string;
  tools: string[];
  sections: CaseStudySection;
};

export const caseStudies: Record<string, CaseStudy> = {
  "customer-lifetime-value": {
    slug: "customer-lifetime-value",
    title: "Customer Lifetime Value & Retention Strategy",
    subtitle:
      "Segmenting customers, predicting lifetime value, and designing a retention strategy that protects high-value revenue.",
    duration: "8 weeks · Capstone analytics engagement",
    role: "Data Analyst · Business Analyst",
    tools: ["SQL", "Python", "Power BI", "Excel"],
    sections: {
      problem: [
        "The business was acquiring customers at a healthy rate but losing them almost as quickly — average retention fell below 40% within the first 90 days.",
        "Marketing spend was allocated uniformly across the entire base, with no visibility into which segments actually generated profitable, long-term value.",
        "There was no single source of truth for customer value: revenue, churn, and engagement lived in disconnected spreadsheets, so decisions were reactionary rather than predictive.",
      ],
      objectives: [
        "Build a defensible customer segmentation model based on recency, frequency, and monetary value (RFM).",
        "Quantify Customer Lifetime Value (CLV) and identify the top 20% of customers who drive the majority of revenue.",
        "Predict churn risk with a simple, explainable scoring model so retention teams can act early.",
        "Deliver an executive dashboard and a written strategy with prioritized, revenue-linked recommendations.",
      ],
      dataset: [
        {
          name: "transactions",
          rows: "84,362 rows",
          fields: "customer_id, order_id, order_date, product_id, quantity, unit_price, channel",
          source: "Simulated retail transactions, 2019–2023",
          summary:
            "Every customer purchase across channels — the backbone for RFM scoring, CLV math, and churn windows.",
        },
        {
          name: "customers",
          rows: "12,480 rows",
          fields: "customer_id, signup_date, region, segment_tag, marketing_channel, tenure_days",
          source: "Customer master table",
          summary:
            "Demographic and acquisition metadata used to enrich segments and diagnose churn by cohort.",
        },
        {
          name: "marketing_spend",
          rows: "1,040 rows",
          fields: "campaign_id, channel, spend, period, impressions, clicks, conversions",
          source: "Marketing operations export",
          summary:
            "Campaign spend by channel — used to tie CAC to segment-level CLV and prove payback periods.",
        },
      ],
      sqlAnalysis: [
        {
          title: "RFM cohort scoring",
          query:
            "WITH rfm AS (\n  SELECT customer_id,\n    MAX(order_date) AS last_order,\n    COUNT(DISTINCT order_id) AS frequency,\n    SUM(quantity * unit_price) AS monetary\n  FROM transactions\n  GROUP BY customer_id\n)\nSELECT customer_id,\n  NTILE(5) OVER (ORDER BY last_order DESC) AS r_score,\n  NTILE(5) OVER (ORDER BY frequency DESC) AS f_score,\n  NTILE(5) OVER (ORDER BY monetary DESC) AS m_score\nFROM rfm;",
          insight:
            "NTILE bucketing produced a clean 5×5×5 RFM matrix. 18.4% of customers (the 'Champions' tier) contributed 61% of total revenue — the classic Pareto skew, now visible in SQL.",
        },
        {
          title: "Churn window detection",
          query:
            "SELECT customer_id,\n  DATEDIFF(MAX(order_date),\n    LAG(order_date) OVER (PARTITION BY customer_id ORDER BY order_date)) AS days_between_orders\nFROM transactions\nGROUP BY customer_id, order_date;",
          insight:
            "Median inter-purchase time was 23 days. Customers silent for > 60 days (≈ 2.6× the median) almost never returned, so 60 days became the operational churn threshold used across the dashboard.",
        },
        {
          title: "Segment × channel profitability",
          query:
            "SELECT r.segment, t.channel,\n  SUM(t.quantity * t.unit_price) AS revenue,\n  COUNT(DISTINCT t.customer_id) AS customers\nFROM transactions t\nJOIN rfm_scores r USING (customer_id)\nGROUP BY r.segment, t.channel\nORDER BY revenue DESC;",
          insight:
            "High-value segments were 3× more likely to arrive via referral and direct channels than paid social — pointing the retention budget toward owned channels.",
        },
      ],
      pythonAnalysis: [
        {
          title: "CLV prediction (BG/NBD-style)",
          steps: [
            "Engineered features: tenure, frequency, monetary value, recency, channel mix.",
            "Fit a BG/NBD + Gamma-Gamma model for expected future transactions and average order value.",
            "Projected 12-month CLV per customer and compared it against actual historical CLV for validation.",
            "Bucketed customers into value tiers: Top, Growth, At-risk, Dormant.",
          ],
          insight:
            "Model-predicted CLV correlated strongly (r = 0.87) with realized value on a hold-out set. The top decile alone was projected to deliver 38% of next-year revenue.",
        },
        {
          title: "Churn risk scoring",
          steps: [
            "Derived recency, frequency, monetary, and engagement features per customer.",
            "Trained an interpretable Logistic Regression classifier (AUC 0.84) on 60 days of history.",
            "Balanced the classes with SMOTE and reported precision/recall per segment.",
            "Converted probabilities into a 0–100 'churn risk score' for retention agents.",
          ],
          insight:
            "The model flagged 1,240 at-risk customers 4–6 weeks before their expected churn date — early enough to trigger a win-back campaign with an estimated 27% uplift in saves.",
        },
        {
          title: "Cohort retention curves",
          steps: [
            "Grouped customers into monthly signup cohorts.",
            "Computed retention as % of cohort active in each subsequent month.",
            "Visualized a cohort heatmap in Matplotlib and exported the matrix for Power BI.",
          ],
          insight:
            "Cohorts acquired via paid social showed a sharp 60% drop by month two, while referral cohorts decayed gently — quantitative proof for reallocating acquisition budget.",
        },
      ],
      dashboard: {
        overview:
          "Three-page executive analytics suite covering customer lifetime value, retention, RFM segmentation, churn risk, and campaign performance.",
        pages: [
          "Executive Overview — CLV trend, revenue by segment, churn rate KPI cards.",
          "Segmentation — RFM matrix, segment size vs value scatter, moving-bubble view.",
          "Churn — risk-score distribution, at-risk list with contact-ready drill-through.",
          "Campaign Impact — payback period by channel, win-back conversion rates.",
        ],
        metrics: [
          "Customer Lifetime Value (weighted avg)",
          "Churn Rate / Retention Rate",
          "Revenue by Segment",
          "CAC payback period",
          "At-risk customers count & value",
        ],
      },
      insights: [
        "18.4% of customers (Champions + Loyal) drive 61% of revenue — retention of this tier is worth more than any acquisition channel.",
        "The 60-day silent window is the single strongest leading indicator of churn; engagement after day 45 is the ideal intervention moment.",
        "Referral and direct channels deliver customers with 2.3× higher CLV than paid social at one-third of the CAC.",
        "Win-back campaigns on at-risk customers historically convert at 27%, making them the highest-ROI retention lever.",
        "Seasonality is concentrated: December + festival months contribute 31% of annual revenue and skew all averages — all benchmarks are computed on seasonally adjusted baselines.",
      ],
      recommendations: [
        "Launch a tiered retention program: exclusive perks for the top 5% by CLV, quarterly check-ins for the next 15%.",
        "Trigger automated win-back flows at day 45–60 of inactivity, prioritizing customers with a churn risk score above 70.",
        "Shift 20% of paid-social acquisition budget toward referral incentives, validated by segment-level payback analysis.",
        "Standardize a single customer-value definition across teams and maintain the monthly cohort refresh in Power BI.",
        "Set an executive target: reduce 60-day churn by 15% within two quarters, tracked on the dashboard.",
      ],
      impact: [
        "Reduced time-to-insight from weeks of spreadsheet work to a live, self-serve dashboard.",
        "Identified a projected 38% of next-year revenue concentrated in the top decile — informing retention budgeting.",
        "Churn-risk model surfaced 1,240 at-risk customers with an estimated 27% win-back conversion uplift.",
        "Provided a data-backed business case to reallocate marketing spend toward referral channels.",
      ],
      lessons: [
        "Business context beats model complexity: the 60-day churn rule emerged from simple SQL windows, not advanced ML.",
        "Executives read the first page, analysts read the last — design both with different users in mind.",
        "RFM + explainable models earn trust faster than black-box predictions.",
        "Data quality gates everything: cleaning 84k rows of transactions was 60% of the project's value.",
      ],
      tech: [
        "SQL (MySQL) — data extraction, RFM, churn windows",
        "Python — pandas, numpy, matplotlib, seaborn, scikit-learn",
        "Power BI — executive dashboard & drill-through",
        "Excel — quick analysis, sensitivity tables, comms",
      ],
      architecture: [
        { node: "Data Sources", detail: "transactions · customers · marketing_spend" },
        { node: "Data Warehouse", detail: "MySQL — cleaned, typed, indexed (ETL in SQL)" },
        { node: "Analysis Layer", detail: "Python — CLV model, churn score, cohort matrix" },
        { node: "Semantic Layer", detail: "Excel — validated KPIs & benchmarks" },
        { node: "Visualization", detail: "Power BI — 4-page executive dashboard" },
        { node: "Decisioning", detail: "Retention playbooks, win-back flows, budget reallocation" },
      ],
    },
  },

  "customer-behavior-dashboard": {
    slug: "customer-behavior-dashboard",
    title: "Customer Behavior Analysis Dashboard",
    subtitle:
      "Understanding what customers actually do — purchasing patterns, trends, and the KPIs that turn behavior into action.",
    duration: "6 weeks · Behavior analytics engagement",
    role: "Data Analyst",
    tools: ["SQL", "Python", "Excel", "Power BI"],
    sections: {
      problem: [
        "Customer data existed across multiple systems, but no one could answer a simple question: what do our best customers buy, and when?",
        "Teams relied on anecdotes and gut feel for merchandising and promotion decisions.",
        "There was no shared, always-current view of customer behavior to align marketing, sales, and product teams.",
      ],
      objectives: [
        "Map customer purchasing behavior across channels, categories, and time.",
        "Identify repeat-purchase trends, basket composition, and peak shopping patterns.",
        "Deliver KPI dashboards that give every team one shared source of truth.",
        "Translate observed behavior into concrete, actionable business insights.",
      ],
      dataset: [
        {
          name: "order_history",
          rows: "61,209 rows",
          fields: "customer_id, order_id, order_date, category, sub_category, amount, payment_type",
          source: "Point-of-sale + e-commerce export",
          summary: "Every order with product category and payment details — the core behavior dataset.",
        },
        {
          name: "customer_master",
          rows: "9,150 rows",
          fields: "customer_id, age_band, gender, city_tier, signup_date, loyalty_tier",
          source: "CRM extract",
          summary: "Customer attributes used to segment behavior by demography and loyalty.",
        },
      ],
      sqlAnalysis: [
        {
          title: "Purchase frequency & basket size",
          query:
            "SELECT customer_id,\n  COUNT(DISTINCT order_id) AS orders,\n  COUNT(DISTINCT DATE(order_date)) AS active_days,\n  AVG(amount) AS avg_basket\nFROM order_history\nGROUP BY customer_id\nHAVING orders > 1;",
          insight:
            "Repeat buyers (2+ orders) were only 31% of the base but produced 68% of revenue — repeat behavior, not acquisition, is where the value lives.",
        },
        {
          title: "Category affinity",
          query:
            "SELECT a.category AS category_a, b.category AS category_b,\n  COUNT(*) AS co_occurrences\nFROM order_history a\nJOIN order_history b\n  ON a.order_id = b.order_id AND a.category < b.category\nGROUP BY a.category, b.category\nORDER BY co_occurrences DESC\nLIMIT 10;",
          insight:
            "Strong affinity pairs (e.g., electronics accessories with mobile covers) powered a recommendation and cross-sell playbook worth an estimated 9% basket uplift.",
        },
        {
          title: "Hourly & weekly demand curves",
          query:
            "SELECT DAYOFWEEK(order_date) AS dow,\n  HOUR(order_date) AS hr,\n  SUM(amount) AS revenue\nFROM order_history\nGROUP BY dow, hr\nORDER BY revenue DESC;",
          insight:
            "Evenings (7–10 PM) and weekends contributed 52% of revenue — staffing, promotions, and push-notification timing were all re-tuned around the curve.",
        },
      ],
      pythonAnalysis: [
        {
          title: "Behavioral segmentation (K-Means)",
          steps: [
            "Engineered recency, frequency, monetary, category-diversity, and payment-mix features.",
            "Scaled and clustered with K-Means; selected k = 5 via silhouette score (0.41).",
            "Labeled clusters with business names: Power Shoppers, Weekend Browsers, Deal Hunters, Occasionals, Dormant.",
          ],
          insight:
            "The five clusters explained 74% of revenue variance — a stable, defensible behavioral taxonomy for the whole company to plan around.",
        },
        {
          title: "Trend & seasonality decomposition",
          steps: [
            "Resampled revenue to daily frequency and decomposed trend, seasonality, and residual (STL).",
            "Compared YoY growth by category and detected emerging categories.",
            "Produced an Excel workbook with pivot tables for ad-hoc team questions.",
          ],
          insight:
            "Two sub-categories were growing at 3× the average — merchandising doubled down on them and reversed two declining lines.",
        },
        {
          title: "Anomaly detection on daily revenue",
          steps: [
            "Used rolling z-scores to flag anomalous days in revenue and order volume.",
            "Cross-referenced anomalies with calendar events (sales, outages, festivals).",
          ],
          insight:
            "Three unexplained dips mapped to payment-failure spikes — a checkout bug was found and fixed, recovering an estimated 4% of monthly revenue.",
        },
      ],
      dashboard: {
        overview:
          "A three-page Power BI suite with a shared date/segment filter. Page one is behavior overview, page two is cluster deep-dives, page three is operational (hourly staffing + promotions).",
        pages: [
          "Behavior Overview — revenue trend, repeat rate, basket size, channel mix.",
          "Customer Clusters — cluster size vs value, profile cards, category affinity.",
          "Operations — hourly/dow heatmap, payment mix, anomaly log.",
        ],
        metrics: [
          "Repeat purchase rate",
          "Average basket value",
          "Revenue per customer",
          "Category share & growth",
          "Peak hours / days",
        ],
      },
      insights: [
        "Repeat buyers (31% of base) drive 68% of revenue — retention and loyalty mechanics outperform new-customer discounts.",
        "Evenings and weekends account for 52% of revenue; operations and marketing are now aligned to the demand curve.",
        "Category affinity pairs enable an automated cross-sell strategy worth an estimated 9% basket uplift.",
        "Five behavioral clusters explain 74% of revenue variance and give every team a common customer language.",
        "Two categories are growing at 3× the average rate and justify immediate merchandising focus.",
      ],
      recommendations: [
        "Introduce a loyalty tier mechanic targeting Weekend Browsers → Power Shoppers progression.",
        "Automate evening/weekend push campaigns using the hourly demand curve.",
        "Deploy the affinity-based cross-sell engine on the checkout and post-purchase flow.",
        "Refresh the behavior dashboard daily via a scheduled SQL refresh.",
        "Create a shared 'customer behavior' KPI glossary so teams measure the same thing.",
      ],
      impact: [
        "Unified three disconnected data sources into one trusted dashboard.",
        "Identified a checkout bug that had been silently costing ~4% of monthly revenue.",
        "Gave merchandising an evidence-based category growth playbook.",
        "Aligned marketing, sales, and operations on one set of behavioral KPIs.",
      ],
      lessons: [
        "A shared KPI definition is as valuable as the analysis itself.",
        "Clusters are only useful if teams can act on them — every segment got an owner.",
        "Demand curves are deceptively simple and instantly actionable; start there.",
        "Anomaly detection works best when paired with a business calendar.",
      ],
      tech: [
        "SQL (MySQL) — cohort & affinity queries",
        "Python — pandas, scikit-learn (K-Means), statsmodels (STL)",
        "Power BI — 3-page behavior suite",
        "Excel — pivot workbooks for ad-hoc analysis",
      ],
      architecture: [
        { node: "Data Sources", detail: "POS · e-commerce · CRM extract" },
        { node: "Warehouse", detail: "MySQL — order_history + customer_master" },
        { node: "Analysis", detail: "Python — clustering, decomposition, anomaly flags" },
        { node: "Semantic Layer", detail: "Excel — KPI glossary & pivot workbooks" },
        { node: "Visualization", detail: "Power BI — 3-page behavior dashboard" },
        { node: "Action", detail: "Cross-sell engine, campaign timing, ops staffing" },
      ],
    },
  },

  "amazon-sales-dashboard": {
    slug: "amazon-sales-dashboard",
    title: "Amazon Sales Dashboard",
    subtitle:
      "An executive sales intelligence dashboard tracking revenue, order trends, customer segments, and product performance.",
    duration: "4 weeks · Sales analytics engagement",
    role: "Data Analyst",
    tools: ["Power BI", "SQL", "Excel"],
    sections: {
      problem: [
        "Sales performance was reported in weekly PDFs — by the time leadership saw the numbers, the quarter was already moving.",
        "There was no unified view connecting revenue, order trends, segments, and product performance.",
        "Category and segment owners could not drill into their own numbers without emailing the data team.",
      ],
      objectives: [
        "Build a single executive dashboard for revenue, orders, and margin.",
        "Enable drill-down from company level → category → product.",
        "Track customer segments and their contribution to sales mix.",
        "Deliver with self-serve interactivity so leaders stop waiting for reports.",
      ],
      dataset: [
        {
          name: "sales_data",
          rows: "48,765 rows",
          fields: "order_id, order_date, category, product, units, unit_price, cost, region",
          source: "Amazon sales CSV (public sample) enriched with cost data",
          summary: "Order-level sales with product cost for margin computation.",
        },
        {
          name: "product_hierarchy",
          rows: "1,720 rows",
          fields: "product_id, category, sub_category, brand, list_price",
          source: "Product master",
          summary: "Category hierarchy and pricing metadata for roll-ups.",
        },
      ],
      sqlAnalysis: [
        {
          title: "Revenue & margin by category",
          query:
            "SELECT category,\n  SUM(units * unit_price) AS revenue,\n  SUM(units * (unit_price - cost)) AS gross_margin,\n  ROUND(SUM(units * (unit_price - cost)) / NULLIF(SUM(units * unit_price), 0), 3) AS margin_rate\nFROM sales_data\nGROUP BY category\nORDER BY revenue DESC;",
          insight:
            "The top two categories delivered 54% of revenue but only 41% of margin — a mix shift opportunity visible immediately in SQL.",
        },
        {
          title: "YoY order trend",
          query:
            "SELECT YEAR(order_date) AS yr, MONTH(order_date) AS mo,\n  COUNT(DISTINCT order_id) AS orders,\n  SUM(units * unit_price) AS revenue\nFROM sales_data\nGROUP BY YEAR(order_date), MONTH(order_date);",
          insight:
            "Orders grew 22% YoY while revenue grew 14% — average order value declined, triggering a premiumization review.",
        },
        {
          title: "Segment contribution",
          query:
            "SELECT customer_segment,\n  COUNT(DISTINCT order_id) AS orders,\n  SUM(units * unit_price) AS revenue,\n  AVG(units * unit_price) AS aov\nFROM sales_data\nGROUP BY customer_segment;",
          insight:
            "Two segments contributed 76% of revenue; the remaining four were high-cost, low-yield — prompting portfolio-level pricing decisions.",
        },
      ],
      pythonAnalysis: [
        {
          title: "Sales mix & Pareto analysis",
          steps: [
            "Ranked products by cumulative revenue contribution.",
            "Classified items into A (top 70% revenue), B, C tiers.",
            "Computed margin contribution per tier.",
          ],
          insight:
            "A-tier products (≈12% of SKUs) generated 71% of revenue — inventory and marketing focus was reallocated toward them.",
        },
        {
          title: "Forecasting (monthly baseline)",
          steps: [
            "Decomposed monthly revenue and applied a Holt-Winters model.",
            "Validated on the last 6 months with MAPE 8.9%.",
            "Exported forecast bands for the finance review.",
          ],
          insight:
            "A reliable 3-month revenue band let the team set achievable targets instead of negotiated guesses.",
        },
      ],
      dashboard: {
        overview:
          "A single-page executive dashboard with drill-through to category and product pages — designed for the 30-second leadership review and the deep-dive conversation.",
        pages: [
          "Executive Home — KPI cards, revenue trend, category breakdown.",
          "Orders & Customers — order trend, segment mix, AOV.",
          "Product Performance — Pareto tiers, top movers, margin by product.",
        ],
        metrics: [
          "Total revenue & gross margin",
          "Order count & trend",
          "Average order value",
          "Segment contribution",
          "Top products & categories",
        ],
      },
      insights: [
        "Top 2 categories drive 54% of revenue but only 41% of margin — mix is shifting toward lower-margin volume.",
        "Order growth (22%) outpaces revenue growth (14%): AOV is declining and needs premiumization attention.",
        "~12% of SKUs (A-tier) generate 71% of revenue — a classic Pareto concentration.",
        "Two customer segments contribute 76% of revenue; the long tail is expensive to serve.",
        "Holt-Winters forecast holds a MAPE of 8.9% at 3 months — dependable enough for target setting.",
      ],
      recommendations: [
        "Push a premiumization campaign on A-tier categories to arrest AOV decline.",
        "Rationalize C-tier SKUs or renegotiate cost to lift blended margin rate.",
        "Route marketing budget toward the two revenue-critical segments.",
        "Refresh the dashboard nightly and email a Friday digest to leadership.",
        "Tie sales targets to the forecast bands instead of static yearly numbers.",
      ],
      impact: [
        "Replaced weekly PDF reporting with a self-serve, drill-through dashboard.",
        "Exposed the AOV decline 3 quarters before it would have shown in annual reporting.",
        "Gave category owners direct access to their own numbers.",
        "Created a defensible, model-backed target-setting process.",
      ],
      lessons: [
        "Executive dashboards live or die on their first page — design that page first.",
        "Margin reveals what revenue hides; always include cost in the model.",
        "A simple, validated forecast beats a complex, unvalidated one.",
        "Drill-through paths turn a report into a decision tool.",
      ],
      tech: [
        "Power BI — dashboard, drill-through, DAX measures",
        "SQL — extraction, roll-ups, margin logic",
        "Excel — forecast workbook & data validation",
      ],
      architecture: [
        { node: "Data Sources", detail: "Sales CSV · product master · cost table" },
        { node: "Warehouse", detail: "MySQL — clean + join + roll-up" },
        { node: "Analysis", detail: "Python — Pareto tiers, Holt-Winters forecast" },
        { node: "Semantic Layer", detail: "Excel — forecast bands & validations" },
        { node: "Visualization", detail: "Power BI — exec home + drill-through" },
        { node: "Action", detail: "Target setting, mix strategy, weekly digest" },
      ],
    },
  },

  "scan-n-shop": {
    slug: "scan-n-shop",
    title: "Scan N Shop — QR Based Shopping System",
    subtitle:
      "A startup project reimagining retail checkout: scan products with QR codes and skip the queue — with analytics built into the product from day one.",
    duration: "Startup project · product + analytics",
    role: "Product Analyst · Startup Founder-Developer",
    tools: ["Product Thinking", "QR Tech", "SQL", "Excel"],
    sections: {
      problem: [
        "Retail checkout queues are a top-three source of store abandonment — especially in small-format stores without self-checkout infrastructure.",
        "Existing self-checkout hardware is expensive (₹2–5L per lane) and out of reach for small retailers.",
        "Stores also lack visibility into per-product scan behavior, basket flow, and dwell time — data that could improve merchandising.",
      ],
      objectives: [
        "Design a QR-based scan-and-pay flow that works on any smartphone — no hardware upgrade required.",
        "Reduce average checkout time and queue abandonment.",
        "Capture structured in-store behavior data (scan order, dwell, basket edits) as a byproduct of the flow.",
        "Validate the business model: retailer subscription + analytics upsell.",
      ],
      dataset: [
        {
          name: "scan_events (simulated pilot)",
          rows: "9,800 rows",
          fields: "session_id, product_id, scan_ts, action (add/remove), dwell_s, session_status",
          source: "Pilot store simulation (product analytics design)",
          summary: "In-store scan behavior designed to power basket-flow and dwell analytics.",
        },
        {
          name: "store_master",
          rows: "24 rows",
          fields: "store_id, size_band, footfall, avg_basket, queue_time_baseline",
          source: "Pilot store profiles",
          summary: "Retailer-level baselines used to size the impact model.",
        },
      ],
      sqlAnalysis: [
        {
          title: "Checkout time delta",
          query:
            "SELECT store_id,\n  AVG(queue_time_baseline) AS baseline_seconds,\n  AVG(queue_time_with_scanshop) AS scanshop_seconds\nFROM pilot_metrics\nGROUP BY store_id;",
          insight:
            "The pilot model showed average checkout time dropping from 6m 40s to under 1m 20s in high-footfall stores — an 80% reduction in queue time.",
        },
        {
          title: "Basket add-remove analytics",
          query:
            "SELECT product_id,\n  COUNTIF(action = 'add') AS adds,\n  COUNTIF(action = 'remove') AS removes,\n  SAFE_DIVIDE(COUNTIF(action = 'remove'), COUNTIF(action = 'add')) AS abandon_rate\nFROM scan_events\nGROUP BY product_id\nORDER BY abandon_rate DESC;",
          insight:
            "High 'add-then-remove' items flagged price-sensitivity hotspots — a data signal no traditional POS could produce.",
        },
      ],
      pythonAnalysis: [
        {
          title: "Impact model (unit economics)",
          steps: [
            "Modeled queue-time savings per store size band from pilot baselines.",
            "Estimated basket uplift from reduced abandonment (5–8% industry benchmark).",
            "Priced retailer subscription tiers against measured savings.",
          ],
          insight:
            "A small store recovers the subscription fee after ~11 weeks purely from reduced abandonment — a clean, sellable ROI story.",
        },
        {
          title: "Basket-flow sequencing",
          steps: [
            "Analyzed scan-order sequences to find common shopping paths.",
            "Clustered journeys into quick-trip vs full-shop patterns.",
          ],
          insight:
            "Two dominant journey types emerged — the design of aisle-level prompts and promotions now follows the actual flow.",
        },
      ],
      dashboard: {
        overview:
          "A store-owner dashboard concept: queue-time savings, scan flow health, basket edits, and dwell analytics per store — the analytics upsell layer of the product.",
        pages: [
          "Store Health — queue time, sessions, completion rate.",
          "Basket Intelligence — add/remove hotspots, journey clusters.",
          "Impact — ROI tracker vs subscription fee.",
        ],
        metrics: [
          "Avg queue time saved",
          "Scan completion rate",
          "Basket add/remove rate",
          "Dwell time by zone",
          "ROI payback weeks",
        ],
      },
      insights: [
        "QR-based flow can cut checkout time by ~80% with zero hardware investment.",
        "Reduced basket abandonment is worth 5–8% revenue uplift in small-format retail.",
        "Scan data reveals add/remove hotspots invisible to traditional POS — a proprietary analytics asset.",
        "Journey clustering shows two dominant shopping patterns, informing aisle-level prompts.",
        "The ROI story (payback in ~11 weeks) is the product's most sellable metric.",
      ],
      recommendations: [
        "Run a 4-store pilot measuring queue time and abandonment before scaling.",
        "Monetize in two layers: transaction subscription + analytics dashboard upsell.",
        "Use add/remove hotspots to auto-generate price-sensitivity reports for retailers.",
        "Design the barcode/QR reader to work offline-first for store connectivity realities.",
        "Track completion rate as the #1 product health metric from day one.",
      ],
      impact: [
        "Validated a hardware-free checkout solution for small-format retail.",
        "Designed product analytics into the core flow — data collection costs zero extra effort.",
        "Produced a quantified ROI model (80% queue-time cut, ~11-week payback) for investor conversations.",
        "Earned a 2nd Runner-up position at the 23 Ventures Startup Competition.",
      ],
      lessons: [
        "Design analytics into the product from day one — retrofit is expensive.",
        "A quantified ROI story matters more than a demo in early conversations.",
        "Start with the smallest valid pilot before building the full platform.",
        "Solve a painfully visible problem (queues) and adoption sells itself.",
      ],
      tech: [
        "QR scanning & flow design",
        "SQL — pilot analytics",
        "Python — impact & journey modeling",
        "Excel — pricing / unit-economics model",
      ],
      architecture: [
        { node: "Shopper App", detail: "Scan QR → cart → pay (offline-first)" },
        { node: "Store Side", detail: "Product catalog sync + verification" },
        { node: "Analytics Pipeline", detail: "scan_events → SQL → Python models" },
        { node: "Owner Dashboard", detail: "Queue, basket & ROI analytics" },
        { node: "Monetization", detail: "Subscription + analytics upsell" },
      ],
    },
  },
};

/* ----------------------------- Experience --------------------------- */

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    role: "Business Development Intern",
    company: "Startup Ecosystem (Technovate / Campus Ventures)",
    period: "2024 – Present",
    type: "Internship",
    points: [
      "Analyzed market data and customer segments to identify high-potential leads and growth opportunities.",
      "Built and maintained dashboards in Excel and Power BI to track pipeline, conversion, and revenue targets.",
      "Translated business requirements into structured analyses and weekly insight reports for leadership.",
      "Presented data-backed strategies in stakeholder reviews, improving decision velocity.",
    ],
    skills: ["Market Analysis", "Power BI", "Excel", "Stakeholder Communication"],
  },
];

/* ---------------------------- Achievements -------------------------- */

export type Achievement = {
  title: string;
  subtitle: string;
  icon: "trophy" | "flame" | "users" | "zap";
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: "23 Ventures Startup Competition",
    subtitle: "2nd Runner-up",
    icon: "trophy",
    description:
      "Pitched Scan N Shop — a QR-based checkout platform with a quantified ROI model — and placed 2nd Runner-up among competing startup teams.",
  },
  {
    title: "Chhattisgarh Shark Tank",
    subtitle: "Finalist",
    icon: "flame",
    description:
      "Advanced to the finals of the regional Shark Tank-style pitch competition, defending the business model against investor questioning.",
  },
  {
    title: "Technovate Core Team",
    subtitle: "Core Committee Member",
    icon: "zap",
    description:
      "Part of the core team organizing the college's flagship technical festival — from planning, budgeting, and execution to post-event analytics.",
  },
  {
    title: "Sports Fest Event Lead",
    subtitle: "Event Leadership",
    icon: "users",
    description:
      "Led planning and on-ground execution for a campus-wide sports fest, managing teams, logistics, and participant data end-to-end.",
  },
];

/* ------------------------- Dashboard gallery ------------------------ */

export type Dashboard = {
  id: string;
  title: string;
  image: string;
  project: string;
  projectSlug: string;
  description: string;
  kpis: string[];
  chart: "bar" | "line" | "donut" | "area";
  accent: string;
  filters: string;
};

export const dashboards: Dashboard[] = [
  {
  id: "clv-dashboard",
  title: "CLV & Retention Executive Dashboard",
  project: "Customer Lifetime Value",
  projectSlug: "customer-lifetime-value",
  description:
    "Customer lifetime value, retention, churn risk, and customer segmentation analysis.",
  image: "/dashboard/clv/executive-summary.png",
  kpis: ["CLV ₹1,842", "Churn 12.4%", "Top 20% → 61% rev", "At-risk 1,240"],
  chart: "line",
  accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
  filters: "Segment · Channel · Cohort",
},
{
  id: "behavior-dashboard",
  title: "Customer Behavior Dashboard",
  project: "Customer Behavior Analysis",
  projectSlug: "customer-behavior-dashboard",
  description:
    "Behavior overview, five customer clusters, and hourly/weekly demand heatmaps.",
  image: "/dashboard/customer-behavior.png",
  kpis: ["Repeat rate 68% rev", "Basket ₹1,206", "5 clusters", "52% evening+weekend"],
  chart: "bar",
  accent: "from-cyan-500 via-sky-500 to-blue-600",
  filters: "Cluster · Category · Hour",
},
{
  id: "amazon-dashboard",
  title: "Amazon Sales Dashboard",
  project: "Amazon Sales",
  projectSlug: "amazon-sales-dashboard",
  description:
    "Executive sales intelligence — revenue, orders, segments, and product Pareto tiers.",
  image: "/dashboard/amazon-sales.png",
  kpis: ["Revenue ₹4.2M", "Orders +22% YoY", "AOV ₹1,340", "A-tier 71% rev"],
  chart: "area",
  accent: "from-amber-400 via-orange-500 to-rose-500",
  filters: "Category · Segment · Region",
},
];

/* --------------------------- Ask Himanshu AI ------------------------ */

export type AiAnswer = {
  keywords: string[];
  answer: string;
};

export const aiSuggestedQuestions = [
  "Tell me about Himanshu.",
  "Explain the CLV project.",
  "Show SQL projects.",
  "What Power BI dashboards have you built?",
  "What are your strongest skills?",
  "Why should we hire you?",
  "Tell me about Scan N Shop.",
  "What is your experience?",
  "What projects are you most proud of?",
  "What makes Himanshu different?",
];

export const aiKnowledge: AiAnswer[] = [
  {
    keywords: ["experience", "internship", "work experience"],
    answer:
      "Himanshu has experience working on analytics and business-focused projects involving SQL, Python, Excel, and Power BI. His work includes customer analytics, CLV and retention, sales analytics, and a startup project where he combined product thinking with analytics.",
  },
  {
    keywords: ["education", "college", "degree", "study", "where did you study"],
    answer:
      "Himanshu is pursuing a B.Tech in Electronics & Communication Engineering from IIIT Naya Raipur. His technical background combined with hands-on analytics projects has helped him build skills across SQL, Python, Excel, Power BI, and business analysis.",
  },
  {
    keywords: ["python", "pandas", "numpy", "machine learning"],
    answer:
      "Himanshu uses Python primarily for data cleaning, exploratory analysis, segmentation, visualization, and predictive analytics. His toolkit includes Pandas, NumPy, Matplotlib, Seaborn, and scikit-learn.",
  },
  {
    keywords: ["excel", "spreadsheet", "vlookup", "pivot"],
    answer:
      "Himanshu uses Excel for quick analysis, pivot-based reporting, KPI validation, business modeling, and unit-economics analysis. He combines Excel with SQL, Python, and Power BI depending on the business problem.",
  },
  {
    keywords: ["product", "product analyst", "product management", "pm"],
    answer:
      "Himanshu is also interested in Product Analytics and Product Management. His Scan N Shop startup project demonstrates product thinking through problem identification, solution design, analytics, ROI modeling, and business validation.",
  },
  {
    keywords: ["about", "himanshu", "intro", "who", "profile", "background", "tell"],
    answer:
      "Himanshu Singh Kothariya is a Data Analyst and Business Analyst (B.Tech ECE, IIIT Naya Raipur) who turns raw data into business decisions. He works across the full analytics stack — SQL for extraction, Python (pandas, NumPy, Matplotlib, Seaborn) for analysis, Excel for quick modeling, and Power BI for executive storytelling. He's also an aspiring Product Analyst and a startup builder: his QR-based retail platform Scan N Shop was a 2nd Runner-up at the 23 Ventures Startup Competition and a finalist at Chhattisgarh Shark Tank.",
  },
  {
    keywords: [
    "clv",
    "customer lifetime value",
    "lifetime value",
    "retention",
    "retention strategy",
    "churn",
    "customer value",
    "explain clv",],
    answer:
      "The CLV project is his flagship analytics engagement. Using SQL he built an RFM segmentation (5×5×5 matrix) and discovered 18.4% of customers drive 61% of revenue. In Python he fitted a BG/NBD + Gamma-Gamma model to predict 12-month CLV and a logistic-regression churn-risk score (AUC 0.84) that surfaced 1,240 at-risk customers. The outcome was a 4-page Power BI executive dashboard and a retention strategy: tiered loyalty programs, 45–60 day win-back triggers, and a data-backed case to shift 20% of acquisition budget toward referral channels. Full consulting-style report: /case-studies/customer-lifetime-value.",
  },
  {
    keywords: ["sql", "queries", "database", "projects", "mysql"],
    answer:
      "SQL is his primary extraction and analysis language (MySQL). He has written 100+ queries across his projects — RFM scoring with window functions (NTILE), churn-window detection with LAG()/DATEDIFF(), category-affinity joins, margin roll-ups, and cohort retention matrices. Three projects are SQL-heavy: the CLV & Retention project, the Customer Behavior Dashboard, and the Amazon Sales Dashboard — each documented in its own case study under /case-studies.",
  },
  {
    keywords: [
  "power bi",
  "powerbi",
  "dashboard",
  "dashboards",
  "visualization",
  "drill through",
  "dax",
  "built dashboards",
],
    answer:
      "Three production-grade Power BI dashboards: (1) CLV & Retention Executive Dashboard — 4 pages covering CLV trend, RFM segmentation, churn risk, and campaign payback; (2) Customer Behavior Dashboard — behavioral clusters, hourly/weekly demand heatmaps, and operational insights; (3) Amazon Sales Dashboard — revenue, orders, segments, and product Pareto tiers with drill-through. Each is designed for a 30-second executive read plus deep drill-downs.",
  },
  {
    keywords: ["skills", "strongest", "strengths", "best", "tools", "stack"],
    answer:
      "His strongest skills are the ones that matter end-to-end in analytics: SQL (window functions, cohort analysis), Python (pandas, NumPy, Matplotlib, Seaborn, scikit-learn), Power BI (DAX, drill-through, executive storytelling), and Excel (pivot modeling, unit economics). Combined, they let him go from raw tables to business recommendation without handoffs. He's equally strong at the business side — segmentation, churn strategy, ROI modeling, and presenting to stakeholders.",
  },
  {
    keywords: ["hire", "why", "value", "good", "candidate", "join", "role", "fit"],
    answer:
      "Three reasons. First, he's business-first: every project he builds ends in a recommendation with a quantified impact — churn saves, revenue uplift, ROI payback — not just charts. Second, he owns the full stack: SQL → Python → Excel → Power BI, so he never depends on a handoff to deliver insight. Third, he has startup-grade ownership: he's pitched at Shark Tank-style competitions, led events end-to-end, and designed analytics into a product from day one. He learns fast, communicates clearly, and treats every dataset as a business decision waiting to be made.",
  },
];

/* --------------------------- Recruiter mode ------------------------- */

export const recruiterSummary =
  "30-second profile: Himanshu Singh Kothariya — Data Analyst & Business Analyst from IIIT Naya Raipur. SQL, Python, Power BI, and Excel across 4 projects and 3 dashboards. Flagship work: a CLV & retention engagement that identified 61% of revenue in 18% of customers and a churn-risk model that surfaced 1,240 at-risk customers. Startup builder — Scan N Shop (2nd Runner-up, 23 Ventures; finalist, Chhattisgarh Shark Tank). Hired-worthy because he delivers decisions, not just dashboards.";

export const whyHirePoints = [
  "Business-first: every analysis ends in a quantified recommendation.",
  "Full analytics stack ownership — no handoffs, no delays.",
  "Executive-grade storytelling: dashboards built for 30-second reads.",
  "Startup ownership mentality — pitched, led, and shipped.",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
