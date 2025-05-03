(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/ContactForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContactForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ContactForm() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitSuccess, setSubmitSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const subjectOptions = [
        'General Inquiry',
        'Project Collaboration',
        'Job Opportunity',
        'Speaking Engagement',
        'Other'
    ];
    const validateForm = ()=>{
        const newErrors = {};
        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (form.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!form.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (form.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        } else if (form.message.trim().length > 1000) {
            newErrors.message = 'Message must be less than 1000 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            setForm({
                name: '',
                email: '',
                subject: 'General Inquiry',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    if (submitSuccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center bg-green-500/10 rounded-xl border border-green-500/20 animate-fadeIn",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4 animate-pulse",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-8 w-8",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5 13l4 4L19 7"
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-semibold mb-3",
                    children: "Thank You!"
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-300 mb-6 max-w-md mx-auto",
                    children: "Your message has been successfully sent. I appreciate your interest and will get back to you as soon as possible."
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSubmitSuccess(false),
                    className: "px-6 py-2 text-sm bg-neutral-800 hover:bg-neutral-700 rounded-lg transition border border-neutral-700",
                    children: "Send Another Message"
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ContactForm.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "name",
                        className: "flex items-center text-sm font-medium text-neutral-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                className: "mr-2 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            "Name"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "name",
                        name: "name",
                        type: "text",
                        value: form.name,
                        onChange: handleChange,
                        placeholder: "Your name",
                        className: `w-full px-4 py-3 rounded-lg bg-neutral-800/70 text-white border ${errors.name ? 'border-red-500' : 'border-neutral-700'} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition duration-300 ease-in-out`
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: errors.name
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 123,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "email",
                        className: "flex items-center text-sm font-medium text-neutral-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMail"], {
                                className: "mr-2 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            "Email"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "email",
                        name: "email",
                        type: "email",
                        value: form.email,
                        onChange: handleChange,
                        placeholder: "your.email@example.com",
                        className: `w-full px-4 py-3 rounded-lg bg-neutral-800/70 text-white border ${errors.email ? 'border-red-500' : 'border-neutral-700'} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition duration-300 ease-in-out`
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: errors.email
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 142,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "subject",
                        className: "flex items-center text-sm font-medium text-neutral-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTag"], {
                                className: "mr-2 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            "Subject"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "subject",
                        name: "subject",
                        value: form.subject,
                        onChange: handleChange,
                        className: "w-full px-4 py-3 rounded-lg bg-neutral-800/70 text-white border border-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition duration-300 ease-in-out appearance-none",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.5em 1.5em',
                            paddingRight: '2.5rem'
                        },
                        children: subjectOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: option,
                                children: option
                            }, option, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "message",
                        className: "flex items-center text-sm font-medium text-neutral-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMessageSquare"], {
                                className: "mr-2 text-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            "Message"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "message",
                        name: "message",
                        value: form.message,
                        onChange: handleChange,
                        placeholder: "Your message here...",
                        className: `w-full px-4 py-3 rounded-lg bg-neutral-800/70 text-white border ${errors.message ? 'border-red-500' : 'border-neutral-700'} focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition duration-300 ease-in-out min-h-[180px] resize-y`
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-500 text-xs mt-1",
                        children: errors.message
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 181,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-neutral-500",
                            children: [
                                form.message.length,
                                "/1000 characters"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-neutral-500 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700/50",
                children: "By submitting this form, you agree to the processing of your personal data as described in my Privacy Policy. Your information will be handled with care and will not be shared with third parties."
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isSubmitting,
                className: "flex items-center justify-center w-full px-6 py-4 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 active:translate-y-0",
                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "animate-spin -ml-1 mr-2 h-5 w-5 text-white",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ContactForm.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ContactForm.tsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this),
                        "Sending Message..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSend"], {
                            className: "mr-2"
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this),
                        "Send Message"
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactForm.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "5iMuhgM0Z5kj6pttTJLMZxulRVg=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_ContactForm_tsx_48582c6b._.js.map