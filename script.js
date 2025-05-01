// --- بيانات التصنيفات (بدون صور) ---
const categoriesData = [
    { name: 'مقبلات', key: 'مقبلات' },
    { name: 'أطباق رئيسية', key: 'أطباق رئيسية' },
    { name: 'حلويات', key: 'حلويات' },
    { name: 'مشروبات', key: 'مشروبات' },
    // أضف تصنيفات أخرى هنا إذا لزم الأمر
];


// --- بيانات الوصفات (بدون صور وبدون fullDescription، مع الاحتفاظ بـ url) ---
const recipesData = [
    // المقبلات (Appetizers)
    {
        id: 'appetizer1',
        category: 'مقبلات',
        name: 'حمص بالطحينة',
        description: 'طبق شرق أوسطي كريمي ولذيذ.',
        url: 'hummus.html'
    },
    {
        id: 'appetizer2',
        category: 'مقبلات',
        name: 'سلطة الفتوش',
        description: 'سلطة منعشة بالخضروات والخبز المقلي.',
        url: 'fattoush.html'
    },
    {
        id: 'appetizer3',
        category: 'مقبلات',
        name: 'كرات الجبن المقلية',
        description: 'وجبة خفيفة مقرمشة وممتعة.',
        url: 'cheese-balls.html'
    },
    
    // الأطباق الرئيسية (Mains)
    {
        id: 'main1',
        category: 'أطباق رئيسية',
        name: 'شاورما الدجاج',
        description: 'شرائح دجاج متبّلة ومشوّية، تقدم مع الخبز والصلصات.',
        url: 'shawarma.html'
    },
    {
        id: 'main2',
        category: 'أطباق رئيسية',
        name: 'مقلوبة الباذنجان',
        description: 'طبقات من الأرز والباذنجان واللحم مقلوبة في قدر واحد.',
        url: 'maqluba.html'
    },
    {
        id: 'main3',
        category: 'أطباق رئيسية',
        name: 'بطاطا في الصينية',
        description: 'شرائح بطاطا مطبوخة مع اللحم أو الدجاج والصلصة في الفرن.',
        url: 'potato-tray.html'
    },
    {
        id: 'main4',
        category: 'أطباق رئيسية',
        name: 'كوسا محشي',
        description: 'كوسا محشوة بالأرز واللحم، تطهى في صلصة الطماطم.',
        url: 'stuffed-zucchini.html'
    },
    {
        id: 'main5',
        category: 'أطباق رئيسية',
        name: 'كبسة دجاج',
        description: 'طبق أرز سعودي شهي مطبوخ مع الدجاج والتوابل.',
        url: 'chicken-kabsa.html'
    },
    
    // الحلويات (Desserts)
    {
        id: 'dessert1',
        category: 'حلويات',
        name: 'أم علي',
        description: 'حلوى مصرية دافئة وغنية بالخبز والمكسرات.',
        url: 'om-ali.html'
    },
    {
        id: 'dessert2',
        category: 'حلويات',
        name: 'كريم كراميل',
        description: 'حلوى ناعمة ولذيذة بصوص الكراميل.',
        url: 'creme-caramel.html'
    },
    {
        id: 'dessert3',
        category: 'حلويات',
        name: 'ليالي لبنان',
        description: 'حلوى سميد بالحليب مع قشطة وقطر.',
        url: 'layali-lubnan.html'
    },
    
    // المشروبات (Drinks)
    {
        id: 'drink1',
        category: 'مشروبات',
        name: 'عصير الليمون بالنعناع',
        description: 'مشروب صيفي منعش وسهل التحضير.',
        url: 'lemon-mint.html'
    },
    {
        id: 'drink2',
        category: 'مشروبات',
        name: 'سموذي التوت المشكل',
        description: 'مشروب صحي ولذيذ ومليء بمضادات الأكسدة.',
        url: 'berry-smoothie.html'
    },
    {
        id: 'drink3',
        category: 'مشروبات',
        name: 'قهوة مثلجة (آيس كوفي)',
        description: 'مشروب قهوة بارد ومنعش لمحبي القهوة.',
        url: 'iced-coffee.html'
    }
];

// --- عناصر DOM الرئيسية (تبقى كما هي) ---
const contentArea = document.getElementById('content-area');

// --- دالة لعرض الصفحة الرئيسية (بدون صور تصنيفات) ---
function renderHomepage() {
    contentArea.innerHTML = `
        <section id="homepage" class="page">
            <h2>أهلاً بك في موقع الطبخ البسيط</h2>
            <p>اكتشف مجموعة متنوعة من الوصفات اللذيذة والمصنفة لتسهيل عملية البحث.</p>
            <h3>التصنيفات:</h3>
            <ul class="category-grid">
                ${getCategoriesHtml()}
            </ul>
        </section>
    `;
    
    contentArea.querySelectorAll('.category-grid a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.closest('a').getAttribute('data-category');
            renderCategoryPage(category);
        });
    });
}

// دالة للحصول على قائمة التصنيفات بشكل ديناميكي كبطاقات (بدون صور)
function getCategoriesHtml() {
    return categoriesData.map(category => `
        <li class="category-card">
            <a href="#" data-category="${category.key}">
                <h3>${category.name}</h3> <!-- نص فقط -->
            </a>
        </li>
    `).join('');
}


// --- دالة لعرض صفحة التصنيف (بدون صور وصفات، مع روابط لملفات HTML) ---
function renderCategoryPage(category) {
    const filteredRecipes = recipesData.filter(recipe => recipe.category === category);
    
    contentArea.innerHTML = `
        <section id="category-page" class="page">
             <a href="index.html" class="back-button">العودة للصفحة الرئيسية</a>
            <h2>${category}</h2>
            <div class="recipe-grid">
                ${filteredRecipes.map(recipe => `
                    <!-- كل بطاقة هي رابط مباشر لملف HTML الخاص بالوصفة -->
                    <a href="${recipe.url}" class="recipe-card">
                        <!-- إزالة <img> tag -->
                        <div class="card-content">
                            <h3>${recipe.name}</h3>
                            <p>${recipe.description}</p>
                        </div>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
    
    // لم نعد نحتاج مستمعي الأحداث هنا لأن البطاقات أصبحت روابط مباشرة
}

// --- دالة لعرض صفحة تفاصيل الوصفة (تم حذفها) ---
// function renderRecipePage(recipeId) { ... }


// --- عند تحميل الصفحة، اعرض الصفحة الرئيسية ---
document.addEventListener('DOMContentLoaded', renderHomepage);