import { describe, it, expect } from 'vitest';
import { businessDomains } from './domains';

describe('Business Domains Data', () => {
  it('should have 12 business domains', () => {
    expect(businessDomains).toHaveLength(12);
  });

  it('should have all required fields for each domain', () => {
    businessDomains.forEach((domain) => {
      expect(domain).toHaveProperty('id');
      expect(domain).toHaveProperty('name');
      expect(domain).toHaveProperty('description');
      expect(domain).toHaveProperty('details');
      expect(domain).toHaveProperty('color');
      
      expect(typeof domain.id).toBe('number');
      expect(typeof domain.name).toBe('string');
      expect(typeof domain.description).toBe('string');
      expect(typeof domain.color).toBe('string');
      
      expect(domain.name.length).toBeGreaterThan(0);
      expect(domain.description.length).toBeGreaterThan(0);
    });
  });

  it('should have valid details structure for each domain', () => {
    businessDomains.forEach((domain) => {
      expect(domain.details).toHaveProperty('mainEntities');
      expect(domain.details).toHaveProperty('keyFeatures');
      expect(domain.details).toHaveProperty('challenges');
      expect(domain.details).toHaveProperty('technologies');
      
      expect(Array.isArray(domain.details.mainEntities)).toBe(true);
      expect(Array.isArray(domain.details.keyFeatures)).toBe(true);
      expect(Array.isArray(domain.details.challenges)).toBe(true);
      expect(Array.isArray(domain.details.technologies)).toBe(true);
      
      expect(domain.details.mainEntities.length).toBeGreaterThan(0);
      expect(domain.details.keyFeatures.length).toBeGreaterThan(0);
      expect(domain.details.challenges.length).toBeGreaterThan(0);
      expect(domain.details.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should have unique IDs for each domain', () => {
    const ids = businessDomains.map(d => d.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(businessDomains.length);
  });

  it('should have valid color format (hex)', () => {
    const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
    businessDomains.forEach((domain) => {
      expect(domain.color).toMatch(hexColorRegex);
    });
  });

  it('should have specific domains', () => {
    const domainNames = businessDomains.map(d => d.name);
    expect(domainNames).toContain('Solução Bancária');
    expect(domainNames).toContain('Gestão de Crédito');
    expect(domainNames).toContain('Gestão de Pedágio');
    expect(domainNames).toContain('E-commerce');
    expect(domainNames).toContain('Telemedicina');
    expect(domainNames).toContain('Gestão de Frotas');
    expect(domainNames).toContain('Sistema de RH');
    expect(domainNames).toContain('Gestão Escolar');
    expect(domainNames).toContain('Gestão Hospitalar');
    expect(domainNames).toContain('Gestão de Estoque');
    expect(domainNames).toContain('Sistema de Delivery');
    expect(domainNames).toContain('CRM - Gestão de Relacionamento');
  });
});
