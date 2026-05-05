import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AssistantWidget from '../src/components/AssistantWidget';
import React from 'react';

describe('AssistantWidget Component', () => {
  it('renders the chatbot toggle button with ARIA label', () => {
    render(<AssistantWidget />);
    const toggleButton = screen.getByLabelText(/Open AI Assistant/i);
    expect(toggleButton).toBeDefined();
  });

  it('opens the chat dialog when clicked', () => {
    render(<AssistantWidget />);
    const toggleButton = screen.getByLabelText(/Open AI Assistant/i);
    fireEvent.click(toggleButton);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeDefined();
  });
});
