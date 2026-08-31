# HTechCom Frontend Application

A professional Vietnamese employee management and document system frontend built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Project Overview

This is the frontend for **Công ty TNHH Thương Mại và Công Nghệ Hoàng Trần (HTechCom)** - a complete employee management and AI-assisted document processing system.

### Key Features

- ✅ **Dashboard** - Real-time statistics and quick actions
- ✅ **Attendance Management** - Track employee check-in/out
- ✅ **Employee Directory** - Comprehensive employee management
- ✅ **Customer Management** - Maintain customer database
- ✅ **Document Management** - Create and manage handover/acceptance documents
- ✅ **Equipment Tracking** - Detailed equipment inventory and pricing
- ✅ **Payment Tracking** - Track paid and outstanding amounts
- ✅ **AI Assistant (Hermes)** - Chat interface for document assistance
- ✅ **Document Preview** - A4 document preview before printing/export
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices

## Technology Stack

- **Framework**: Next.js 16.3.3 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript compiler

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Windows/Mac/Linux

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── dashboard/               # Dashboard page
│   ├── attendance/              # Attendance tracking
│   ├── employees/               # Employee management
│   ├── customers/               # Customer management
│   ├── documents/               # Document management
│   ├── ai/                      # AI Assistant chat
│   ├── reports/                 # Reporting dashboard
│   └── settings/                # Application settings
│
├── components/                   # Reusable React components
│   ├── ui/                      # UI components (Button, Input, etc)
│   ├── layout/                  # Layout components (Sidebar, Topbar)
│   └── documents/               # Document components
│
├── services/                     # API/business logic services
│   ├── document-service.ts
│   ├── employee-service.ts
│   ├── customer-service.ts
│   ├── attendance-service.ts
│   └── ai-service.ts
│
├── types/                        # TypeScript type definitions
├── mock/                         # Mock data (for development)
├── config/                       # Configuration
├── lib/                          # Utility functions
└── public/                       # Static assets
```

## Key Features Breakdown

### Dashboard
- Key metrics (employees, attendance, pending documents)
- Today's attendance table
- Recent documents list
- Quick action buttons

### Document Creation Form
- Customer selector with autocomplete
- Multi-row equipment table with calculations
- Automatic total and payment tracking
- Signature areas
- AI-assisted form filling
- Document preview and export

### Equipment Table
- Dynamic row management
- Unit selection
- Automatic total calculation
- Input validation

### AI Assistant (Hermes)
- Chat interface for document assistance
- Real-time conversation history
- Mock responses (ready for API integration)

### Document Preview
- A4 format preview
- Professional layout
- Print-ready styling

## Routes

| Route | Purpose |
|-------|---------|
| `/dashboard` | Main dashboard |
| `/attendance` | Attendance tracking |
| `/employees` | Employee directory |
| `/employees/[id]` | Employee details |
| `/customers` | Customer directory |
| `/customers/[id]` | Customer details |
| `/documents` | Document list |
| `/documents/new` | Create document |
| `/documents/[id]` | Document details |
| `/documents/[id]/preview` | Document preview |
| `/ai` | AI Assistant chat |
| `/forms` | Available forms |
| `/reports` | Reporting dashboard |
| `/settings` | Application settings |

## Services & API Abstraction

All business logic is abstracted into services for easy backend integration:

```typescript
// Document Service
documentService.getAll()
documentService.getById(id)
documentService.createDraft(data)
documentService.updateDraft(id, data)
documentService.generatePdf(id)
documentService.saveToGoogleSheet(id)

// AI Service
aiService.analyzeDocumentText(text)
aiService.chatWithAssistant(message, history)

// Employee Service
employeeService.getAll()
employeeService.search(query)
employeeService.createEmployee(data)

// Customer Service
customerService.getAll()
customerService.search(query)
customerService.createCustomer(data)

// Attendance Service
attendanceService.getToday()
attendanceService.checkIn(employeeId)
attendanceService.checkOut(employeeId)
```

## Mock Data

The application includes comprehensive mock data:

- 5 Employees across multiple departments
- 4 Customers with contact information
- 5 Attendance records with various statuses
- 2 Sample documents with equipment
- Mock AI responses for Hermes assistant

Located in `src/mock/` - easily replaceable with real API calls.

## Environment Configuration

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
# Future backend integrations:
# HERMES_API_KEY=xxx
# GOOGLE_SHEETS_API_KEY=xxx
# TELEGRAM_BOT_TOKEN=xxx
```

## Component Library

### UI Components
- `Button` - Variants: primary, secondary, outline, destructive, ghost
- `Input` - Text input with error states
- `Select` - Dropdown with options
- `CurrencyInput` - Vietnamese dong formatting
- `StatusBadge` - Color-coded status display
- `StatCard` - Statistics display card
- `EmptyState` - Empty state display
- `LoadingState` - Loading indicator

### Layout Components
- `Sidebar` - Main navigation sidebar
- `Topbar` - Top navigation with user menu
- `MainLayout` - Main layout wrapper

### Document Components
- `EquipmentTable` - Equipment entry table
- `CustomerSelector` - Searchable customer selection

## Design System

### Colors
- Primary: Blue-600
- Success: Green
- Warning: Amber
- Error: Red
- Neutral: Gray

### Spacing & Typography
- 4px grid system
- Consistent padding and margins
- Clear visual hierarchy
- Professional Vietnamese business styling

## Development Guidelines

### Adding Pages
1. Create in `app/[module]/page.tsx`
2. Wrap with `MainLayout` component
3. Use reusable components
4. Call services, not APIs directly

### Adding Components
1. Create in appropriate component folder
2. Use TypeScript for props
3. Style with Tailwind CSS
4. Support responsive design
5. Ensure accessibility

### Creating Services
1. Create in `src/services/`
2. Use types from `src/types/`
3. Return consistent interfaces
4. Mock data for development

## Quality Assurance

```bash
# TypeScript check
npx tsc --noEmit

# ESLint
npm run lint

# Production build (validates everything)
npm run build
```

## Backend Integration Checklist

- [ ] Replace mock data with real API calls
- [ ] Implement authentication/authorization
- [ ] Connect document export (PDF, Google Sheets)
- [ ] Integrate Hermes AI API
- [ ] Setup Telegram bot notifications
- [ ] Configure PostgreSQL database
- [ ] Add file upload for documents
- [ ] Implement email notifications
- [ ] Setup audit logging
- [ ] Configure backup/restore procedures

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
rm -rf .next && npm run build
```

### Linting Issues
```bash
npm run lint
```

## Company Information

**Công ty TNHH Thương Mại và Công Nghệ Hoàng Trần**

- **Short Name**: HTechCom
- **Address**: Thôn Cầu Đen, Xã Kép, Tỉnh Bắc Ninh
- **Phone**: 0966.636.639
- **Email**: hoangtran.techcom@gmail.com

## License

Internal use only - HTechCom

---

Built with ❤️ for HTechCom
