import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Example extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column({type: 'varchar', length: 100})
    NAME: string;

    @Column({type: 'varchar', length: 10})
    DOCUMENT: string;

    @Column({type: 'decimal', precision: 4, default: 0.0000})
    DISCOUNT: number;

    @Column({type: 'decimal', precision: 4, default: 0.0000})
    CREDIT: number;

    @Column({type: 'text'})
    ADDRESS: string;

    @Column({type: 'varchar', length: 100})
    CITY: 'string';

    @Column({type: 'varchar', length: 100})
    PROVINCE: 'string';

    @Column({type: 'varchar', length: 100})
    COUNTRY: 'string';

    @Column({type: 'varchar', length: 20, nullable: true})
    POSTALCODE: 'string';

    @Column({type: 'varchar', length: 20, nullable: true})
    PHONE_MOBILE: 'string';

    @Column({type: 'varchar', length: 20, nullable: true})
    PHONE: 'string';

    @Column({type: 'varchar', length: 20, nullable: true})
    FAX: 'string';

    @Column({type: 'varchar', length: 100, nullable: true})
    EMAIL: 'string';

    @Column({type: 'varchar', length: 255, nullable: true})
    WEB_PAGE: 'string';

    @Column({type: 'text', nullable: true})
    NOTES: 'string';

    @CreateDateColumn()
    CREATED_AT: 'string';

    @UpdateDateColumn()
    UPDATED_AT: 'string';

    // Model methods 
    //...
}