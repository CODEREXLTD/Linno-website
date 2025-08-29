'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const EditText = ({
  placeholder = '',
  value = '',
  onChange,
  onFocus,
  onBlur,
  type = 'text',
  disabled = false,
  className = '',
  multiline = false,
  rows = 3,
  error = false,
  errorMessage = '',
  label = '',
  required = false,
  autoComplete = '',
  rightImage = null,
  leftIcon = null,
  maxLength,
  id,
  ...props
}) => {
  const inputRef = useRef(null);
  const textareaRef = useRef(null);
  
  // Use controlled component approach - only use value prop, no local state
  const currentValue = value || '';

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    
    // Check max length constraint
    if (maxLength && newValue.length > maxLength) return;
    
    // Always propagate change to parent
    if (onChange) {
      onChange(e);
    }
  }, [maxLength, onChange]);

  const handleRightImageClick = () => {
    if (multiline && textareaRef.current) {
      textareaRef.current.focus();
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const baseClasses = `
    w-full
    px-3 py-2.5 sm:px-4 sm:py-3 lg:px-5 lg:py-3.5
    text-sm sm:text-base lg:text-lg
    text-gray-900
    bg-transparent
    border-2
    rounded-md sm:rounded-lg
    transition-all duration-200 ease-in-out
    placeholder:text-gray-500
    disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50
    focus:outline-none
    touch-manipulation
    ${
      error 
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
        : 'border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-500'
    }
    focus:ring-2 focus:ring-opacity-50
    ${leftIcon ? 'pl-10 sm:pl-12 lg:pl-14' : ''}
    ${rightImage ? 'pr-10 sm:pr-12 lg:pr-14' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const InputWrapper = ({ children }) => (
    <div className="relative w-full">
      {leftIcon && (
        <div className="absolute left-3 sm:left-4 lg:left-5 top-1/2 -translate-y-1/2 pointer-events-none">
          {leftIcon}
        </div>
      )}

      {children}

      {rightImage && (
        <button
          type="button"
          onClick={handleRightImageClick}
          className="absolute right-3 sm:right-4 lg:right-5 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Focus input"
          tabIndex={-1}
        >
          <Image
            src={rightImage.src}
            alt={rightImage.alt || ''}
            width={rightImage.width || 20}
            height={rightImage.height || 20}
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 object-contain"
          />
        </button>
      )}

      {maxLength && (
        <div className="absolute right-3 sm:right-4 lg:right-5 -bottom-6 text-xs text-gray-500">
          {currentValue.length}/{maxLength}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <InputWrapper>
        {multiline ? (
          <textarea
            ref={textareaRef}
            id={inputId}
            value={currentValue}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            maxLength={maxLength}
            required={required}
            autoComplete={autoComplete}
            className={`${baseClasses} resize-vertical min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]`}
            aria-invalid={error}
            aria-describedby={error && errorMessage ? `${inputId}-error` : undefined}
            {...props}
          />
        ) : (
          <input
            ref={inputRef}
            id={inputId}
            type={type}
            value={currentValue}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            required={required}
            autoComplete={autoComplete}
            className={`${baseClasses} min-h-[44px] sm:min-h-[48px] lg:min-h-[52px]`}
            aria-invalid={error}
            aria-describedby={error && errorMessage ? `${inputId}-error` : undefined}
            {...props}
          />
        )}
      </InputWrapper>

      {error && errorMessage && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default EditText;