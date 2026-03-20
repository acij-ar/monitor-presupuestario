package com.acij.helpers;

import java.math.BigDecimal;

import com.opencsv.bean.AbstractBeanField;

public class BigDecimalField extends AbstractBeanField<BigDecimal, String> {

    @Override
    protected Object convert(String value) {
        if (value == null || value.trim().isEmpty()) return null;
        return new BigDecimal(value.replace(",", "."));
    }
}