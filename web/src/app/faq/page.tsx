import fs from 'fs';
import path from 'path';

export default function FAQPage() {
  // Read FAQ content from markdown file
  const faqPath = path.join(process.cwd(), 'content', 'faq.md');
  const faqContent = fs.readFileSync(faqPath, 'utf8');
  
  // Simple markdown to HTML conversion for FAQ content
  const htmlContent = faqContent
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mb-6">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h2>')
    .replace(/^\*\*(.*?)\*\*/gm, '<strong>$1</strong>')
    .replace(/^\*(.*?)\*/gm, '<em>$1</em>')
    .replace(/^---$/gm, '<hr class="my-8 border-gray-200" />')
    .replace(/\n\n/g, '</p><p class="text-gray-600 mb-4">')
    .replace(/^([^<\n].*?)$/gm, '<p class="text-gray-600 mb-4">$1</p>')
    .replace(/<p class="text-gray-600 mb-4"><h/g, '<h')
    .replace(/<\/h([1-6])><\/p>/g, '</h$1>');

  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="space-y-4"
          />
        </div>
        
        {/* Contact CTA */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">
            Still have questions?
          </h3>
          <p className="text-amber-700 mb-4">
            Give us a call or visit our contact page
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(XXX) XXX-XXXX"
              className="bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Call Us
            </a>
            <a
              href="/contact"
              className="bg-white text-amber-600 border-2 border-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Contact Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
